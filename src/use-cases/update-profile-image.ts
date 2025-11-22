import { UsersRepository } from '@/repositories/users-repository'

interface UpdateProfileImageUseCaseRequest {
  userId: string
  fotoDePerfil: string
}

export class UpdateProfileImageUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ userId, fotoDePerfil }: UpdateProfileImageUseCaseRequest) {
    await this.usersRepository.updateProfileImage(userId, fotoDePerfil)
  }
}
