import { EmailsRepository } from '@/repositories/emails-repository'
import { Email } from '@prisma/client'

interface SentEmailsUseCaseRequest {
  idDeQuemEnviou: string
}

interface SentEmailsUseCaseResponse {
  emails: Email[]
}

export class SentEmailsUseCase {
  constructor(private emailsRepository: EmailsRepository) {}

  async execute({
    idDeQuemEnviou,
  }: SentEmailsUseCaseRequest): Promise<SentEmailsUseCaseResponse> {
    const emails =
      await this.emailsRepository.findEmailsByUserId(idDeQuemEnviou)

    return {
      emails,
    }
  }
}
