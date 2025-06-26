import { EmailsRepository } from '@/repositories/emails-repository'

interface CreateEmailUseCaseRequest {
  idDeQuemEnviou: string
  idDeQuemRecebeu: string
  title: string
  content: string
}

export class CreateEmailUseCase {
  constructor(private emailsRepository: EmailsRepository) {}

  async execute({
    idDeQuemEnviou,
    idDeQuemRecebeu,
    title,
    content,
  }: CreateEmailUseCaseRequest) {
    await this.emailsRepository.create({
      idDeQuemEnviou,
      idDeQuemRecebeu,
      title,
      content,
    })
  }
}
