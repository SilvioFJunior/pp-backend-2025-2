import { PrismaEmailRepository } from '@/repositories/prisma/prisma-emails-repository'
import { GetEmailUseCase } from '../get-email'

export function makeGetEmailUseCase() {
  const emailsRepository = new PrismaEmailRepository()
  const getEmailUseCase = new GetEmailUseCase(emailsRepository)

  return getEmailUseCase
}
