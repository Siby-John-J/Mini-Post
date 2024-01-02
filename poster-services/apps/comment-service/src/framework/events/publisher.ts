import { Inject } from "@nestjs/common";
import { publisherAbstract } from "../../domain/abastract/events/publisher";
import { ClientProxy } from "@nestjs/microservices";

export class Publisher extends publisherAbstract {
    constructor(@Inject('COMMENT_SERVICE') private readonly client: ClientProxy) {
        super()
    }
    
    emitMessage(pattern: string, data: string): any {
        return this.client.emit(pattern, data)
    }
}