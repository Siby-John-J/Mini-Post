import { Body, Controller, Post, Put } from '@nestjs/common';
import { CommentServiceService } from '../usecase';
import { Comment } from '../domain/dto/comment.dto';
import { MessagePattern } from '@nestjs/microservices';
import { publisherAbstract } from '../domain/abastract/events/publisher';

@Controller('comment')
export class CommentServiceController {
  private allData: object
  constructor(
    private readonly commentService: CommentServiceService,
    private readonly publisher: publisherAbstract
  ) {}
  
  @Post('create')
  async createUser(@Body() data : Comment) {
    return this.commentService.createUser(data)
  }

  @Put('add')
  addComment(@Body() data: any) {
    // Will add body to DataBase
    return this.commentService.createComment(data)
  }

  @MessagePattern('post-create')
  getFrom(data: string) {
    return this.commentService.postComment(data)
  }

  @MessagePattern({cmd: 'get-comments'})
  async getComments(data: any) {

    const dbs = await this.commentService.getCommentsUsecase(JSON.parse(data))
    this.allData = dbs
    
    return this.allData
  }
}
