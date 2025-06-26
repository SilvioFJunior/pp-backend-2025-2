import { EmailsRepository } from '@/repositories/emails-repository'
import { Email } from 'generated/prisma'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface GetEmailUseCaseRequest {
  id: string
}

export class GetEmailUseCase {
  constructor(private emailsRepository: EmailsRepository) {}

  async execute({ id }: GetEmailUseCaseRequest): Promise<Email> {
    const email = await this.emailsRepository.findById(id)

    if (!email) {
      throw new ResourceNotFoundError()
    }

    return email
  }
}
