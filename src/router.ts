import { Router, query } from "express";
import { body, param } from "express-validator";
import {
  getBooks,
  getOneBook,
  createBook,
  assignBookToUser,
} from "./handlers/book";
import { handleInputErrors } from "./modules/middleware";
import { createAuthor } from "./handlers/author";

const router = Router();

/**
 * Book
 */

router.get("/book", getBooks);
router.get("/book/:id", param("id").isString(), getOneBook);
// router.put(
//   "/book/:id",
//   body("name").isString(),
//   handleInputErrors,
//   (req, res) => {
//     res.status(200).json({ message: req.body.name });
//   },
// );
router.put(
  "/book/:id",
  param("id").isUUID(),
  handleInputErrors,
  assignBookToUser,
);
router.post(
  "/book",
  body("title").isString().escape(),
  body("author").isUUID(),
  handleInputErrors,
  createBook,
);
router.delete("/book/:id", () => {});

/**
 * Author
 */

router.post(
  "/author",
  body("name").isString().escape(),
  handleInputErrors,
  createAuthor,
);

/**
 * Update
 */

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.post("/update", () => {});
router.delete("/update/:id", () => {});

/**
 * Update point
 */

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint/:id", () => {});
router.post("/updatepoint", () => {});
router.delete("/updatepoint/:id", () => {});

export default router;
