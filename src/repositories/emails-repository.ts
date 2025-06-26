import { Email, Prisma } from 'generated/prisma'

export interface EmailsRepository {
  delete(emailId: string): Promise<void>
  findSentEmailsByUserId(userId: string): Promise<Email[]>
  findEmailsByUserId(userId: string): Promise<Email[]>
  findById(emailId: string): Promise<Email | null>
  create(data: Prisma.EmailUncheckedCreateInput): Promise<Email>
}
