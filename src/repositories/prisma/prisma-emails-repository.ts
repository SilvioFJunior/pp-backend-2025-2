import { prisma } from '@/lib/prisma'
import { Prisma } from 'generated/prisma/client'
import { EmailsRepository } from '../emails-repository'

export class PrismaEmailRepository implements EmailsRepository {
  async delete(emailId: string): Promise<void> {
    await prisma.email.delete({
      where: {
        id: emailId,
      },
    })
  }

  async findSentEmailsByUserId(userId: string) {
    const emails = await prisma.email.findMany({
      where: {
        idDeQuemRecebeu: userId,
      },
      orderBy: {
        data: 'desc',
      },
    })

    return emails
  }

  async findEmailsByUserId(userId: string) {
    const emails = await prisma.email.findMany({
      where: {
        idDeQuemEnviou: userId,
      },
      orderBy: {
        data: 'desc',
      },
    })

    return emails
  }

  async findById(emailId: string) {
    const email = await prisma.email.findUnique({
      where: {
        id: emailId,
      },
    })

    return email
  }

  async create(data: Prisma.EmailUncheckedCreateInput) {
    const email = await prisma.email.create({
      data,
    })

    return email
  }
}
