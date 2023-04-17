import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerSetUp } from './config/Swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  swaggerSetUp(app);

  await app.listen(process.env.PORT);
  console.log(`Aplicación funcionando en: ${await app.getUrl()}`);
}
bootstrap();