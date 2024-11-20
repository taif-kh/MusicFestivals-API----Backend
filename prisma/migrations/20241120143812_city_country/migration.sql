/*
  Warnings:

  - You are about to drop the column `location` on the `Events` table. All the data in the column will be lost.
  - Added the required column `city` to the `Events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Events" DROP COLUMN "location",
ADD COLUMN     "city" VARCHAR(255) NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL;
