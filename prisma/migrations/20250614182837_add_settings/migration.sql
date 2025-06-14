/*
  Warnings:

  - You are about to drop the column `featured` on the `Settlement` table. All the data in the column will be lost.
  - You are about to drop the column `order` on the `Settlement` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Settlement` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Lawyer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `date` to the `Settlement` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Settlement` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `amount` on the `Settlement` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Settlement" DROP COLUMN "featured",
DROP COLUMN "order",
DROP COLUMN "year",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
DROP COLUMN "amount",
ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "News" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "source" TEXT NOT NULL,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Archive" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "category" TEXT NOT NULL,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Archive_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Settings" (
    "id" TEXT NOT NULL,
    "firmName" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lawyer_email_key" ON "Lawyer"("email");
