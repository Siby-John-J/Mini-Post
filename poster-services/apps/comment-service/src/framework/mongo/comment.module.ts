import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentAbstractRepository } from '../../domain/abastract/comment.rep.abastract';
import { CommentSchema } from './model/comment.model';
import { MongoCommentService } from './comment.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Comment',
        schema: CommentSchema,
      },
    ]),
  ],
  providers: [
    {
      provide: CommentAbstractRepository,
      useClass: MongoCommentService,
    },
  ],
  exports: [CommentAbstractRepository]
})
export class CommentRepositoryModule {}
