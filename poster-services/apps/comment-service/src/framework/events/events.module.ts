import { Module } from "@nestjs/common"
import { publisherAbstract } from "../../domain/abastract/events/publisher";
import { ConsumerAbstract } from "../../domain/abastract/events/consumer";
import { Publisher } from "./publisher";
import { Consumer } from "./consumer";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
    imports: [
        ClientsModule.register([{
            name: 'COMMENT_SERVICE',
            transport: Transport.RMQ,
            options: {
              urls: ['amqp://localhost:5672'],
              queue: 'post_comm',
              queueOptions: {
                durable: false
              }
            }
          }]),
    ],
    providers: [
        {
            provide: publisherAbstract,
            useClass: Publisher
        },
        {
            provide: ConsumerAbstract,
            useClass: Consumer
        }
    ],
    exports: [ConsumerAbstract, publisherAbstract]
})
export class EventModule {}
