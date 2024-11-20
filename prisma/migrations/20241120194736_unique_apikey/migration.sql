/*
  Warnings:

  - A unique constraint covering the columns `[apiKey]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Users_apiKey_key" ON "Users"("apiKey");
