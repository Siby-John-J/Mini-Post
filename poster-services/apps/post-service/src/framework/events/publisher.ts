import { Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { publisherAbstract } from "../../domain/abstract/events/publisher";

export class Publisher implements publisherAbstract {
    private allData: object
    constructor(@Inject('POST_SERVICE') private readonly client: ClientProxy) {
        // super()
    }

    async emitMessage(pattern: string, data: string) {
        const d = await this.client.send<any, any>(pattern, data).subscribe((value: any) : any => {
            this.allData = value
        })

        await this.delay(60)
        
        return this.allData

    }

    delay(ms) {
        return new Promise(res => setTimeout(res, ms))
    }
}