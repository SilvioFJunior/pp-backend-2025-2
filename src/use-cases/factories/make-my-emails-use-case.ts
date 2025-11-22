import { PrismaEmailRepository } from '@/repositories/prisma/prisma-emails-repository'
import { MyEmailsUseCase } from '../my-emails'

export function makeMyEmailsUseCase() {
  const emailsRepository = new PrismaEmailRepository()
  const myEmailsUseCase = new MyEmailsUseCase(emailsRepository)

  return myEmailsUseCase
}
