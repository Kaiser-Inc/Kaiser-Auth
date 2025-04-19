import type { FastifyInstance } from 'fastify'
import { Register } from '../controlers/register'

export async function appRoutes(app: FastifyInstance) {
    app.post('/users', Register)
}
