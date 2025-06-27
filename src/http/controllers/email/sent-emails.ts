import { FastifyRequest, FastifyReply } from 'fastify'
import { makeSentEmailsUseCase } from '@/use-cases/factories/make-sent-emails-use-case'

export async function sentEmails(request: FastifyRequest, reply: FastifyReply) {
  const sentEmailsUseCase = makeSentEmailsUseCase()

  const userId = request.user.sub

  const { emails } = await sentEmailsUseCase.execute({
    idDeQuemEnviou: userId,
  })

  return reply.status(200).send({
    emails,
  })
}
