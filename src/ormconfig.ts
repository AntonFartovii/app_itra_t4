import * as dotenv from "dotenv";
import { DataSourceOptions } from 'typeorm';
import { UserEntity } from './users/entities/user.entity';
dotenv.config();

export default  {
  type:    'postgres',
  host:     process.env.POSTGRES_HOST as string,
  port:     parseInt ( process.env.POSTGRES_PORT as string, 10 ) as number,
  username: process.env.POSTGRES_USER as string,
  password: process.env.POSTGRES_PASSWORD as string,
  database: process.env.POSTGRES_DB as string,
  autoLoadEntities: true,
  synchronize: true,
  // entities: ["dist/**/entities/*.entity.js"],
  entities: [
    UserEntity
  ],
  subscribers: [],
  migrationsTableName:"migrations",
  migrations: ["dist/**/migration/*.js"],
  // migrationsRun: true
} as DataSourceOptions

// to package.json

// "typeorm:migration": "node ./node_modules/typeorm/cli migration:run -d src/ormconfig.ts"
// "typeorm:generate": "node ./node_modules/typeorm/cli migration:generate -n newTables -d migration"
// "typeorm:create": "node ./node_modules/typeorm/cli migration:create ./src/migration/post"

// my commands
// node ./node_modules/typeorm/cli migration:create ./src/migration/postref

