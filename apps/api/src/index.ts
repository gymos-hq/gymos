import { buildServer } from './server.js';
import { env } from './config/env.js';

async function start(): Promise<void> {
  try {
    const app = await buildServer();
    await app.listen({ port: env.PORT, host: env.HOST });
    app.log.info(`GymOS API running at http://${env.HOST}:${env.PORT}`);
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

start();