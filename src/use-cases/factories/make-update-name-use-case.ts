import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { UpdateNameUseCase } from '../update-name'

export function makeUpdateNameUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const updateNameUseCase = new UpdateNameUseCase(usersRepository)

  return updateNameUseCase
}
