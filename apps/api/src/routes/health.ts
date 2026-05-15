import { FastifyInstance } from 'fastify';

export async function healthRoute(app: FastifyInstance): Promise<void> {
    app.get('/health', async () => {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'gymos-api',
      version: '0.0.1',
    };
  });
}
