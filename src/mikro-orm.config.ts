import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Task } from '@/entities/task.entity';

const config: Options<PostgreSqlDriver> = {
  entities: [Task],
  dbName: process.env.DATABASE_NAME || 'nestjs_mikroorm',
  user: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'root',
  host: process.env.DATABASE_HOST || 'localhost',
  port: Number(process.env.DATABASE_PORT) || 5432,
  driver: PostgreSqlDriver,
  debug: true,
  allowGlobalContext: true,
  migrations: {
    path: 'migrations',
    fileName: (timestamp: string) => `migration-${timestamp}.ts`, // ✅ Custom file name for migration files
  },
};

export default config;
