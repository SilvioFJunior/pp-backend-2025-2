import { FastifyRequest, FastifyReply } from 'fastify'
import z from 'zod'
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'
import { makeUpdateNameUseCase } from '@/use-cases/factories/make-update-name-use-case'

export async function updateName(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    userId: z.string(),
    name: z.string(),
  })

  const { userId, name } = registerBodySchema.parse(request.body)

  try {
    const updateNameUseCase = makeUpdateNameUseCase()

    await updateNameUseCase.execute({
      userId,
      name,
    })
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    throw err
  }

  return reply.status(201).send()
}
