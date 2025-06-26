import { PrismaEmailRepository } from '@/repositories/prisma/prisma-emails-repository'
import { DeleteEmailUseCase } from '../delete-email'

export function makeDeleteEmailUseCase() {
  const emailsRepository = new PrismaEmailRepository()
  const deleteEmailUseCase = new DeleteEmailUseCase(emailsRepository)

  return deleteEmailUseCase
}
