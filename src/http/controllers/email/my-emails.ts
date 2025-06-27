import { FastifyRequest, FastifyReply } from 'fastify'
import { makeMyEmailsUseCase } from '@/use-cases/factories/make-my-emails-use-case'

export async function myEmails(request: FastifyRequest, reply: FastifyReply) {
  const myEmailsUseCase = makeMyEmailsUseCase()

  const userId = request.user.sub

  const { emails } = await myEmailsUseCase.execute({
    idDeQuemRecebeu: userId,
  })

  return reply.status(200).send({
    emails,
  })
}
