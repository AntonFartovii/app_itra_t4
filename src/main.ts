import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as hbs from 'express-handlebars';
import * as session from 'express-session';
import { join } from 'path';
import { varMiddleware } from '../middleware/variables';



async function start() {
  const PORT = process.env.PORT || 80
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  app.engine(
    'hbs',
    hbs.engine({
      extname: 'hbs',
      defaultLayout: 'main',
      layoutsDir: join(__dirname, '..', 'views', 'layouts'),
      partialsDir: join(__dirname, '..', 'views', 'partials')
    }),
  );

  app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
  }))

  app.use( varMiddleware )
  app.setViewEngine('hbs');

  const config = new DocumentBuilder()
    .setTitle(`Урок ULBI`)
    .setDescription(`REST API`)
    .setVersion('1.0.0')
    .addTag('ULBI')
    .build()

  const document = SwaggerModule.createDocument( app, config )
  SwaggerModule.setup('/api/doc', app, document )



  // app.useGlobalGuards(JwtAuthGuard)  // глобальное ограничение
  // app.useGlobalPipes( new ValidationPipe() ) // глобально для каждого эндпоинта
  await app.listen(PORT, () => {
    console.log(`Server running on PORT = ${PORT}`);
  });

}
start();
