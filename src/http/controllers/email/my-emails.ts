import { FastifyRequest, FastifyReply } from 'fastify'
import z from 'zod'
import { makeMyEmailsUseCase } from '@/use-cases/factories/make-my-emails-use-case'

export async function myEmails(request: FastifyRequest, reply: FastifyReply) {
  const myEmailsBodySchema = z.object({
    idDeQuemRecebeu: z.string(),
  })

  const { idDeQuemRecebeu } = myEmailsBodySchema.parse(request.body)

  const myEmailsUseCase = makeMyEmailsUseCase()

  const { emails } = await myEmailsUseCase.execute({
    idDeQuemRecebeu,
  })

  return reply.status(200).send({
    emails,
  })
}
