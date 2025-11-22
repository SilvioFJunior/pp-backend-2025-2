import { PrismaEmailRepository } from '@/repositories/prisma/prisma-emails-repository'
import { SentEmailsUseCase } from '../sent-emails'

export function makeSentEmailsUseCase() {
  const emailsRepository = new PrismaEmailRepository()
  const sentEmailsUseCase = new SentEmailsUseCase(emailsRepository)

  return sentEmailsUseCase
}
