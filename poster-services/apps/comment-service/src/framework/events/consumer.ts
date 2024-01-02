import { ConsumerAbstract } from "../../domain/abastract/events/consumer";
import { EventPattern } from "@nestjs/microservices";

export class Consumer extends ConsumerAbstract {
    
    @EventPattern('data')
    listern(metadata: string): any {
        return metadata
    }
}