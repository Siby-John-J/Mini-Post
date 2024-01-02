import { Module } from '@nestjs/common';
import { PostUseCase } from './post.usecase.service';
import { MongoPostModule } from '../framework/mongo/mongo.post.module';
import { EventModule } from '../framework/events/events.module';

@Module({
  imports: [MongoPostModule, EventModule],
  providers: [PostUseCase],
  exports: [PostUseCase]
})
export class PostUseCaseModule {}
