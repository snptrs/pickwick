-- AlterTable
ALTER TABLE "BooksOnUsers" ADD COLUMN     "owned" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "wishlist" BOOLEAN NOT NULL DEFAULT false;
