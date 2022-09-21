import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as hbs from 'express-handlebars';
import { join } from 'path';
import { printName } from './hbs/helpers';
import { resolve } from 'path';

async function bootstrap() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  // app.useStaticAssets(resolve('../public'));
  // app.setBaseViewsDir(resolve('../views'));

  app.engine(
    'hbs',
    hbs.engine({
      extname: 'hbs',
      defaultLayout: 'main',
      layoutsDir: join(__dirname, '..', 'views', 'layouts'),
      partialsDir: join(__dirname, '..', 'views', 'partials'),
      helpers: { printName },
    }),
  );

  app.setViewEngine('hbs');
  await app.listen(5000, () => { console.log(`Server running on ${PORT}`)});
}
bootstrap();
