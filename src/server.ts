import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import morgan from "morgan";
import { createNewUser, signIn } from "./handlers/user";
import { protect } from "./modules/auth";
import router from "./router";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.sendStatus(200);
  res.json({ message: "Are you in the right place?" });
});

app.use("/api", protect, router);

app.post("/user", createNewUser);
app.post("/signin", signIn);

app.use(
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    console.log(err);
    res.status(500);
    res.json({ message: "Ooops, something went wrong" });
  },
);

export default app;
