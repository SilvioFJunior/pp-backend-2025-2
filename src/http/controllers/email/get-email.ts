import { FastifyRequest, FastifyReply } from 'fastify'
import z from 'zod'
import { makeGetEmailUseCase } from '@/use-cases/factories/make-get-emails-use-case'

export async function getEmail(request: FastifyRequest, reply: FastifyReply) {
  const getEmailParamsSchema = z.object({
    emailId: z.string(),
  })

  const { emailId } = getEmailParamsSchema.parse(request.params)

  const getEmailUseCase = makeGetEmailUseCase()

  const email = await getEmailUseCase.execute({
    id: emailId,
  })

  return reply.status(200).send({
    email,
  })
}
