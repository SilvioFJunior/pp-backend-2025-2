import { FastifyRequest, FastifyReply } from 'fastify'
import z from 'zod'
import { makeDeleteEmailUseCase } from '@/use-cases/factories/make-delete-email-use-case'
import { EmailNotFoundError } from '@/use-cases/errors/email-not-found-error'
import { EmailAlreadySeenError } from '@/use-cases/errors/email-already-seen-error'
import { InvalidCredentialsError } from '@/use-cases/errors/invalid-credentials-error'

export async function deleteEmail(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const getEmailParamsSchema = z.object({
      emailId: z.string(),
    })

    const { emailId } = getEmailParamsSchema.parse(request.params)

    const deleteEmailUseCase = makeDeleteEmailUseCase()

    const userId = request.user.sub

    await deleteEmailUseCase.execute({
      userId,
      emailId,
    })

    return reply.status(204).send()
  } catch (err) {
    if (err instanceof EmailNotFoundError) {
      return reply.status(404).send({
        message: 'E-mail não encontrado.',
      })
    }
    if (err instanceof EmailAlreadySeenError) {
      return reply.status(401).send({
        message: 'E-mail já visto.',
      })
    }
    if (err instanceof InvalidCredentialsError) {
      return reply.status(409).send({
        message: 'E-mail não enviado.',
      })
    }
    return reply.status(500).send()
  }
}
