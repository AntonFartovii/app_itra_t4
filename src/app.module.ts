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
      database: 'd4cu4kgkh53i54',
      dialect: 'postgres',
      host: 'ec2-54-91-223-99.compute-1.amazonaws.com',
      port: 5432,
      username: 'ciptvvbeeoexbz',
      password:'64ff21d2fcf8ece1388ab14cc8e8d9f21f7567679284cfa358d12a9c9276e846',
      autoLoadModels: true,
      models:[User, Role, UserRoles, Post],
      uri:'jdbc:postgresql://ec2-54-91-223-99.compute-1.amazonaws.com:5432/d4cu4kgkh53i54'
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    PostsModule,
    FilesModule
  ],
})
export class AppModule {}
