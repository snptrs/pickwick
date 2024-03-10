import { Response } from "express";
import prisma from "../db";
import { UserInfoReq } from "../definitions/request";

export const getBooks = async (req: UserInfoReq, res: Response) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      books: true,
    },
  });

  res.json({ data: user.books });
};

export const getOneBook = async (req: UserInfoReq, res: Response) => {
  const id = req.params.id;

  const book = await prisma.book.findFirst({
    where: {
      id,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: book });
};

export const createBook = async (req: UserInfoReq, res: Response) => {
  const book = await prisma.book.create({
    data: {
      title: req.body.title,
      authorId: req.body.author,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: book });
};

// export const updateBook = async (req: UserInfoReq, res: Response) => {
//   const updated = await prisma.product.update({
//     where: {
//       id: req.params.id,
//       belongsToId: req.user.id,
//     },
//     data: {
//       name: req.body.name,
//     },
//   });
//
//   res.json({ data: updated });
// };
//
// export const deleteBook = async (req: UserInfoReq, res: Response) => {
//   const deleted = await prisma.product.delete({
//     where: {
//       id: req.params.id,
//       belongsToId: req.user.id,
//     },
//   });
//
//   res.json({ data: deleted });
// };
