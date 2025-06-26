import { FastifyRequest, FastifyReply } from 'fastify'
import z from 'zod'
import { makeDeleteEmailUseCase } from '@/use-cases/factories/make-delete-email-use-case'

export async function deleteEmail(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getEmailParamsSchema = z.object({
    emailId: z.string(),
  })

  const { emailId } = getEmailParamsSchema.parse(request.params)

  const deleteEmailUseCase = makeDeleteEmailUseCase()

  await deleteEmailUseCase.execute({
    id: emailId,
  })

  return reply.status(204).send()
}
