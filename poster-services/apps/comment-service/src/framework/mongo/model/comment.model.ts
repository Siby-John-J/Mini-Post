import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CommentDocument = Comment & Document

@Schema()
export class Comment  {
    @Prop()
    id: string
    
    @Prop()
    comments: []
}

export const CommentSchema = SchemaFactory.createForClass(Comment)
