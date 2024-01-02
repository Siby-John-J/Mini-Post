import { Injectable } from "@nestjs/common";
import { AbstactRepository } from "../domain";
import { PostDto } from "../domain";
import { ConsumerAbstract } from "../domain/abstract/events/consumer";
// import { EventPattern } from "@nestjs/microservices";

@Injectable()
export class PostUseCase {
    constructor(
        private postservice: AbstactRepository<PostDto>,
        private consumer: ConsumerAbstract
    ) {}
    
    call(data: object) {
        return this.postservice.create(data)
    }

    getAllId() {
        return this.postservice.getAll()
    }
    
    addComment(data : object) {
        
    }
}
