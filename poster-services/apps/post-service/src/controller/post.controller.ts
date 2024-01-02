import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostUseCase } from '../usecase/post.usecase.service';
import { PostDto } from '../domain';
import { MessagePattern } from '@nestjs/microservices';
import { randomUUID } from 'crypto';
import { publisherAbstract } from '../domain/abstract/events/publisher';

@Controller('post')
export class PostController {
  constructor(
    private postusecase: PostUseCase,
    private publish: publisherAbstract
  ) {}

  @Post('create')
  createPost(@Body() data: PostDto) {
    const uuid = randomUUID()

    this.postusecase.call({
      postid: uuid,
      title: data.title,
      content: data.content
    })

    this.publish.emitMessage('post-create', uuid)
  }

  @Get('get')
  async getPost() {
    
    const id = await this.postusecase.getAllId()
    const resp = await this.publish.emitMessage({cmd: 'get-comments'}, JSON.stringify(id))

    return resp
  }

  @MessagePattern('create-comment')
  CreateComment(data: string) {
    this.postusecase.addComment(JSON.parse(data))
  }
}
