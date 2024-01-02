import { Module } from '@nestjs/common';
import { CommentServiceService } from './comment-service.service';
import { CommentRepositoryModule } from '../framework/mongo/comment.module';
import { EventModule } from '../framework/events/events.module';

@Module({
  imports: [CommentRepositoryModule, EventModule],
  providers: [CommentServiceService],
  exports: [CommentServiceService]
})
export class CommentServiceModule {}
