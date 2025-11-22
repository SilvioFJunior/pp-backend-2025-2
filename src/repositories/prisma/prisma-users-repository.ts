import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { UsersRepository } from '../users-repository'

export class PrismaUsersRepository implements UsersRepository {
  async updateProfileImage(userId: string, fotoDePerfil: string) {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        fotoDePerfil,
      },
    })
  }

  async updateName(userId: string, name: string) {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name,
      },
    })
  }

  async findById(userId: string) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    return user
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }
}
