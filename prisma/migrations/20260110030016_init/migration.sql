-- AddForeignKey
ALTER TABLE "emails" ADD CONSTRAINT "emails_idDeQuemRecebeu_fkey" FOREIGN KEY ("idDeQuemRecebeu") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
