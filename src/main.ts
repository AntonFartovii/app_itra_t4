import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as hbs from 'express-handlebars';
import { join } from 'path';



async function start() {
  let PORT = process.env.PORT || 80
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

  app.setViewEngine('hbs');

  const config = new DocumentBuilder()
    .setTitle(`Урок ULBI`)
    .setDescription(`REST API`)
    .setVersion('1.0.0')
    .addTag('ULBI')
    .build()

  const document = SwaggerModule.createDocument( app, config )
  SwaggerModule.setup('/api/doc', app, document )

  await app.listen(PORT, () => {
    console.log(`Server running on PORT = ${PORT}`);
  });

}
start();
