import { EmailsRepository } from '@/repositories/emails-repository'

interface DeleteEmailUseCaseRequest {
  id: string
}

export class DeleteEmailUseCase {
  constructor(private emailsRepository: EmailsRepository) {}

  async execute({ id }: DeleteEmailUseCaseRequest): Promise<void> {
    await this.emailsRepository.delete(id)
  }
}
