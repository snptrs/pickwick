/*
  Warnings:

  - The primary key for the `BooksOnUsers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[userId,bookId]` on the table `BooksOnUsers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "BooksOnUsers" DROP CONSTRAINT "BooksOnUsers_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "BooksOnUsers_userId_bookId_key" ON "BooksOnUsers"("userId", "bookId");
