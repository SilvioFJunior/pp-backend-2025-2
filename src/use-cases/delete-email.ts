import { EmailsRepository } from '@/repositories/emails-repository'
import { EmailNotFoundError } from './errors/email-not-found-error'
import { EmailAlreadySeenError } from './errors/email-already-seen-error'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'

interface DeleteEmailUseCaseRequest {
  userId: string
  emailId: string
}

export class DeleteEmailUseCase {
  constructor(private emailsRepository: EmailsRepository) {}

  async execute({ userId, emailId }: DeleteEmailUseCaseRequest): Promise<void> {
    const email = await this.emailsRepository.findById(emailId)

    if (!email) {
      throw new EmailNotFoundError()
    }

    if (email?.jaVisto === true) {
      throw new EmailAlreadySeenError()
    }

    if (userId !== email.idDeQuemEnviou) {
      throw new InvalidCredentialsError()
    }

    await this.emailsRepository.delete(emailId)
  }
}
