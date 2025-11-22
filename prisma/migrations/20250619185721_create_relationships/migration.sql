/*
  Warnings:

  - Added the required column `userId` to the `emails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "emails" ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "data" SET DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "emails" ADD CONSTRAINT "emails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
