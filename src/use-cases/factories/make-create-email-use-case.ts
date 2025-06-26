import { PrismaEmailRepository } from '@/repositories/prisma/prisma-emails-repository'
import { CreateEmailUseCase } from '../create-email'

export function makeCreateEmailUseCase() {
  const emailsRepository = new PrismaEmailRepository()
  const createEmailsUseCase = new CreateEmailUseCase(emailsRepository)

  return createEmailsUseCase
}
