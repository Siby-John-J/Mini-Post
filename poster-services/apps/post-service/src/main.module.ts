import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './controller/post.controller';
import { PostUseCaseModule } from './usecase/post.usecase.module';
import { EventModule } from './framework/events/events.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/post-service'),
    PostUseCaseModule,
    EventModule
    ],
  controllers: [PostController]
})
export class MainModule {}
