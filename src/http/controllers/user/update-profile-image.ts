import { FastifyRequest, FastifyReply } from 'fastify'
import z from 'zod'
import { makeUpdateProfileImageUseCase } from '@/use-cases/factories/make-profile-image-use-case'
import { UserNotFoundError } from '@/use-cases/errors/user-not-found-error'

export async function updateImage(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    fotoDePerfil: z.string(),
  })

  const { fotoDePerfil } = registerBodySchema.parse(request.body)

  try {
    const updateProfileImageUseCase = makeUpdateProfileImageUseCase()

    const userId = request.user.sub

    await updateProfileImageUseCase.execute({
      userId,
      fotoDePerfil,
    })
  } catch (err) {
    if (err instanceof UserNotFoundError) {
      return reply.status(409).send({ message: err.message })
    }

    throw err
  }

  return reply.status(201).send()
}
