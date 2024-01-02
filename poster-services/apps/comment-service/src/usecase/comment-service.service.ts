import { Injectable } from '@nestjs/common';
import { CommentAbstractRepository } from '../domain/abastract/comment.rep.abastract';
import { Comment } from '../domain/dto/comment.dto';
import { publisherAbstract } from '../domain/abastract/events/publisher';

@Injectable()
export class CommentServiceService {
  constructor(
    private comment: CommentAbstractRepository<Comment>,
    private publish: publisherAbstract
  ) {}
  
  async getUser(): Promise<any> {
    return await this.comment.getAll();
  }

  async createUser(data: object): Promise<any> {
    return await this.comment.create(data);
  }

  async postComment(data: string) : Promise<any> {
    this.comment.create({
      id: data,
      comment: []
    })
  }
  
  async createComment(data: object) : Promise<any> {
    await this.comment.createComment(data)
  }

  async getCommentsUsecase(data: object) {
    return await this.comment.getAllPosts(data)
  }
}
