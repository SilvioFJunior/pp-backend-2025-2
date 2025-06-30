import { EmailsRepository } from '@/repositories/emails-repository'
import { Email } from 'generated/prisma'
import { EmailNotFoundError } from './errors/email-not-found-error'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'

interface GetEmailUseCaseRequest {
  userId: string
  emailId: string
}

export class GetEmailUseCase {
  constructor(private emailsRepository: EmailsRepository) {}

  async execute({ userId, emailId }: GetEmailUseCaseRequest): Promise<Email> {
    const email = await this.emailsRepository.findById(emailId)

    if (!email) {
      throw new EmailNotFoundError()
    }

    if (email.idDeQuemEnviou !== userId && email.idDeQuemRecebeu !== userId) {
      throw new InvalidCredentialsError()
    }

    if (!email.jaVisto) {
      await this.emailsRepository.updateJaVistoEmail(email.id)
    }

    return email
  }
}
