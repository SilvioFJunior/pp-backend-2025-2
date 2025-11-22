import { FastifyRequest, FastifyReply } from 'fastify'
import z from 'zod'
import { makeGetEmailUseCase } from '@/use-cases/factories/make-get-emails-use-case'
import { EmailNotFoundError } from '@/use-cases/errors/email-not-found-error'

export async function getEmail(request: FastifyRequest, reply: FastifyReply) {
  try {
    const getEmailParamsSchema = z.object({
      emailId: z.string(),
    })

    const { emailId } = getEmailParamsSchema.parse(request.params)

    const getEmailUseCase = makeGetEmailUseCase()

    const userId = request.user.sub

    const email = await getEmailUseCase.execute({
      userId,
      emailId,
    })

    return reply.status(200).send({
      email,
    })
  } catch (err) {
    if (err instanceof EmailNotFoundError) {
      return reply.status(404).send({
        message: 'E-mail não encontrado.',
      })
    }
    return reply.status(500).send()
  }
}
