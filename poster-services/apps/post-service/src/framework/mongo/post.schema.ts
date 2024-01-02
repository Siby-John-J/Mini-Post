import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Post {
    @Prop()
    title: string

    @Prop()
    content: string

    @Prop()
    postid: string
}

export const PostSchema = SchemaFactory.createForClass(Post)
