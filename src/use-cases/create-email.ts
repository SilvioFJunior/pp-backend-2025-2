import { EmailsRepository } from '@/repositories/emails-repository'
import { UsersRepository } from '@/repositories/users-repository'
import { UserNotFoundError } from './errors/user-not-found-error'

interface CreateEmailUseCaseRequest {
  idDeQuemEnviou: string
  idDeQuemRecebeu: string
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
    idDeQuemRecebeu,
    title,
    content,
  }: CreateEmailUseCaseRequest) {
    const sender = await this.usersRepository.findById(idDeQuemRecebeu)

    if (!sender) {
      throw new UserNotFoundError()
    }

    await this.emailsRepository.create({
      idDeQuemEnviou,
      idDeQuemRecebeu,
      title,
      content,
    })
  }
}
