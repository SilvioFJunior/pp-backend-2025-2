import { EmailsRepository } from '@/repositories/emails-repository'
import { Email } from '@prisma/client'

interface MyEmailsUseCaseRequest {
  idDeQuemRecebeu: string
}

interface MyEmailsUseCaseResponse {
  emails: Email[]
}

export class MyEmailsUseCase {
  constructor(private emailsRepository: EmailsRepository) {}

  async execute({
    idDeQuemRecebeu,
  }: MyEmailsUseCaseRequest): Promise<MyEmailsUseCaseResponse> {
    const emails =
      await this.emailsRepository.findSentEmailsByUserId(idDeQuemRecebeu)

    return {
      emails,
    }
  }
}
