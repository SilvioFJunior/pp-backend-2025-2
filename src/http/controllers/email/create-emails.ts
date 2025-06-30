import { FastifyRequest, FastifyReply } from 'fastify'
import z from 'zod'
import { makeCreateEmailUseCase } from '@/use-cases/factories/make-create-email-use-case'
import { UserNotFoundError } from '@/use-cases/errors/user-not-found-error'

export async function createEmail(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const createEmailBodySchema = z.object({
      emailDeQuemRecebeu: z.string(),
      title: z.string(),
      content: z.string(),
    })

    const { emailDeQuemRecebeu, title, content } = createEmailBodySchema.parse(
      request.body,
    )
    const createEmailUseCase = makeCreateEmailUseCase()

    const userId = request.user.sub

    await createEmailUseCase.execute({
      idDeQuemEnviou: userId,
      emailDeQuemRecebeu,
      title,
      content,
    })

    return reply.status(201).send()
  } catch (err) {
    if (err instanceof UserNotFoundError) {
      return reply.status(404).send({
        message: 'Usuário não encontrado.',
      })
    }
    return reply.status(500).send()
  }
}
