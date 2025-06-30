import { EmailsRepository } from '@/repositories/emails-repository'
import { UsersRepository } from '@/repositories/users-repository'
import { UserNotFoundError } from './errors/user-not-found-error'

interface CreateEmailUseCaseRequest {
  idDeQuemEnviou: string
  emailDeQuemRecebeu: string
  title: string
  content: string
}

export class CreateEmailUseCase {
  constructor(
    private emailsRepository: EmailsRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({
    idDeQuemEnviou,
    emailDeQuemRecebeu,
    title,
    content,
  }: CreateEmailUseCaseRequest) {
    const sender = await this.usersRepository.findByEmail(emailDeQuemRecebeu)

    if (!sender) {
      throw new UserNotFoundError()
    }

    await this.emailsRepository.create({
      idDeQuemEnviou,
      idDeQuemRecebeu: sender.id,
      title,
      content,
    })
  }
}
