import dotenv from "dotenv";
import app from "./server";
dotenv.config();

app.listen(process.env.PORT || 3001, () => {
  console.log("Server ready");
});
