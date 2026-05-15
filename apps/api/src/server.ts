import Fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import { healthRoute } from './routes/health.js';

export async function buildServer(): Promise<FastifyInstance> {
    const app = Fastify({
        logger: {
            level: 'info',
            transport: {
                target: 'pino-pretty',
                options: {
                    colorize: true,
                    translateTime: 'HH:MM:ss Z',
                    ignore: 'pid,hostname',
                },
            },
        },
    });

// Security and CORS plugins
await app.register(helmet);
await app.register(cors, {
    origin: true,
    credentials: true,
});

// Routes
await app.register(healthRoute);

return app;
}