import { UsersRepository } from '@/repositories/users-repository'

interface UpdateNameUseCaseRequest {
  userId: string
  name: string
}

export class UpdateNameUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ userId, name }: UpdateNameUseCaseRequest) {
    await this.usersRepository.updateName(userId, name)
  }
}
