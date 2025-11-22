import { Prisma, User } from '@prisma/client'

export interface UsersRepository {
  updateProfileImage(userId: string, fotoDePerfil: string): Promise<void>
  updateName(userId: string, name: string): Promise<void>
  findById(userId: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  create(data: Prisma.UserCreateInput): Promise<User>
}
