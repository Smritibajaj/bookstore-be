import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './transform.interceptor';

async function bootstrap() {
  //Logging setup
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  // for validation
  app.useGlobalPipes(new ValidationPipe());
  //for transforming response onject
  app.useGlobalInterceptors(new TransformInterceptor());
  //port selection
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
