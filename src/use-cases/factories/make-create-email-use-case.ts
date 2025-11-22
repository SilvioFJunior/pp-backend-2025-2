import { PrismaEmailRepository } from '@/repositories/prisma/prisma-emails-repository'
import { CreateEmailUseCase } from '../create-email'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'

export function makeCreateEmailUseCase() {
  const emailsRepository = new PrismaEmailRepository()
  const usersRepository = new PrismaUsersRepository()
  const createEmailsUseCase = new CreateEmailUseCase(
    emailsRepository,
    usersRepository,
  )

  return createEmailsUseCase
}
