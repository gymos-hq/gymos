import 'dotenv/config';

interface Env {
  NODE_ENV: 'development' | 'production' | 'test';
  PORT: number;
  HOST: string;
}

function loadEnv(): Env {
  const NODE_ENV = (process.env.NODE_ENV ?? 'development') as Env['NODE_ENV'];
  const PORT = parseInt(process.env.PORT ?? '3001', 10);
  const HOST = process.env.HOST ?? '0.0.0.0';

  if (isNaN(PORT)) {
    throw new Error(`Invalid PORT: ${process.env.PORT}`);
  }

  return { NODE_ENV, PORT, HOST };
}

export const env = loadEnv();