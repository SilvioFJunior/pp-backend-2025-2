import { FastifyRequest, FastifyReply } from 'fastify'
import z from 'zod'
import { makeSentEmailsUseCase } from '@/use-cases/factories/make-sent-emails-use-case'

export async function sentEmails(request: FastifyRequest, reply: FastifyReply) {
  const sentEmailsBodySchema = z.object({
    idDeQuemEnviou: z.string(),
  })

  const { idDeQuemEnviou } = sentEmailsBodySchema.parse(request.body)

  const sentEmailsUseCase = makeSentEmailsUseCase()

  const { emails } = await sentEmailsUseCase.execute({
    idDeQuemEnviou,
  })

  return reply.status(200).send({
    emails,
  })
}
