/*
  Warnings:

  - You are about to drop the column `userId` on the `emails` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "emails" DROP CONSTRAINT "emails_userId_fkey";

-- AlterTable
ALTER TABLE "emails" DROP COLUMN "userId";

-- AddForeignKey
ALTER TABLE "emails" ADD CONSTRAINT "emails_idDeQuemEnviou_fkey" FOREIGN KEY ("idDeQuemEnviou") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
