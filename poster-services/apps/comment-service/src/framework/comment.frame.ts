import { CommentAbstact } from '../domain/abastract/commentAbstact';

export class commentFrameWork implements CommentAbstact {
  getUser(): string {
    return 'from herer bro...';
  }
}
