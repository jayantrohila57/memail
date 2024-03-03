/*
  Warnings:

  - You are about to drop the column `body` on the `Mail` table. All the data in the column will be lost.
  - The `label` column on the `Mail` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `name` to the `Mail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Mail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mail" DROP COLUMN "body",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "text" TEXT NOT NULL,
DROP COLUMN "label",
ADD COLUMN     "label" TEXT[];
