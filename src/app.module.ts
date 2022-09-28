import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.model';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { Post } from './posts/posts.model';
import { FilesModule } from './files/files.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
      // envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      // dialectOptions: {
      //   ssl: {
      //     require: true,
      //     rejectUnauthorized: false}
      //   },
      host: process.env.POSTGRES_HOST,
      port: Number ( process.env.POSTGRES_PORT ),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      dialect: 'postgres',
      autoLoadModels: true,
      models:[User, Role, UserRoles, Post],
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    PostsModule,
    FilesModule
  ],
})
export class AppModule {}
