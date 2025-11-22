import { FastifyInstance } from 'fastify'
import { register } from './controllers/user/register'
import { authenticate } from './controllers/user/authenticate'
import { createEmail } from './controllers/email/create-emails'
import { myEmails } from './controllers/email/my-emails'
import { getEmail } from './controllers/email/get-email'
import { deleteEmail } from './controllers/email/delete-email'
import { updateName } from './controllers/user/update-name'
import { sentEmails } from './controllers/email/sent-emails'
import { verifyJWT } from './middlewares/verify-jwt'
import { updateImage } from './controllers/user/update-profile-image'

export async function appRoutes(app: FastifyInstance) {
  app.post('/user', register)
  app.post('/login', authenticate)
  app.get('/my-emails', { onRequest: [verifyJWT] }, myEmails)
  app.patch('/my-image', { onRequest: [verifyJWT] }, updateImage)
  app.patch('/my-name', { onRequest: [verifyJWT] }, updateName)
  app.post('/email', { onRequest: [verifyJWT] }, createEmail)
  app.get('/email/:emailId', { onRequest: [verifyJWT] }, getEmail)
  app.delete('/email/:emailId', { onRequest: [verifyJWT] }, deleteEmail)
  app.get('/sent-emails', { onRequest: [verifyJWT] }, sentEmails)
}
