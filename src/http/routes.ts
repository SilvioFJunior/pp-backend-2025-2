import { FastifyInstance } from 'fastify'
import { register } from './controllers/user/register'
import { authenticate } from './controllers/user/authenticate'
import { createEmail } from './controllers/email/create-emails'
import { myEmails } from './controllers/email/my-emails'
import { getEmail } from './controllers/email/get-email'
import { deleteEmail } from './controllers/email/delete-email'
import { updateName } from './controllers/user/update-name'
import { sentEmails } from './controllers/email/sent-emails'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)
  app.post('/email', createEmail)
  app.post('/my-emails', myEmails)
  app.get('/email/:emailId', getEmail)
  app.delete('/email/:emailId', deleteEmail)
  app.patch('/my-name', updateName)
  app.post('/sent-emails', sentEmails)
}
