import { Module } from '@nestjs/common';
import { CommentServiceModule } from './usecase/comment-service.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentServiceController } from './controller';
import { EventModule } from './framework/events/events.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/comment-service'),
     CommentServiceModule,
     EventModule
  ],
  controllers: [CommentServiceController]
})
export class MainModule {}