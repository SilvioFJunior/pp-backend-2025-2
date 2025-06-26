import { FastifyRequest, FastifyReply } from 'fastify'
import z from 'zod'
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'
import { makeCreateEmailUseCase } from '@/use-cases/factories/make-create-email-use-case'

export async function createEmail(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createEmailBodySchema = z.object({
    idDeQuemEnviou: z.string(),
    idDeQuemRecebeu: z.string(),
    title: z.string(),
    content: z.string(),
  })

  const { idDeQuemEnviou, idDeQuemRecebeu, title, content } =
    createEmailBodySchema.parse(request.body)

  try {
    const createEmailUseCase = makeCreateEmailUseCase()

    await createEmailUseCase.execute({
      idDeQuemEnviou,
      idDeQuemRecebeu,
      title,
      content,
    })
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    throw err
  }

  return reply.status(201).send()
}
