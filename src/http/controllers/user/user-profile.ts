import { FastifyRequest, FastifyReply } from 'fastify'
import { makeGetUserProfileUseCase } from '@/use-cases/factories/make-get-user-profile-use-case'

export async function userProfile(request: FastifyRequest, reply: FastifyReply) {
  const getUserProfileUseCase = makeGetUserProfileUseCase()

  const userId = request.user.sub

  const { user } = await getUserProfileUseCase.execute({
    userId: userId,
  })

  const { senha, ...userSemSenha } = user;

  return reply.status(200).send({
    user: userSemSenha,
  });
}
