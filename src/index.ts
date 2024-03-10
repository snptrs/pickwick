import app from "./server";
import dotenv from "dotenv";
dotenv.config();

app.listen(3001, () => {
  console.log("Server ready at http://localhost:3001");
});
