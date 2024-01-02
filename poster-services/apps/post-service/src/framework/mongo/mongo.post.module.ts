import { Module } from "@nestjs/common"
import { AbstactRepository } from "../../domain";
import { postRepository } from "./post.repository.service";
import { MongooseModule } from "@nestjs/mongoose";
import { PostSchema } from "./post.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Post',
            schema: PostSchema
        }])
    ],
    providers: [
        {
            provide: AbstactRepository,
            useClass: postRepository
        }
    ],
    exports: [AbstactRepository]
})
export class MongoPostModule {}
