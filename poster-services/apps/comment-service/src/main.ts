import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(MainModule, {
    cors: true
  });
  const microservice = app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'comment_comm',
      queueOptions: {
        durable: false
      }
    }
  })
  await app.startAllMicroservices()
  await app.listen(3001)
}
bootstrap();
