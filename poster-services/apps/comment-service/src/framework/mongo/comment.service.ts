import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { CommentAbstractRepository } from "../../domain/abastract/comment.rep.abastract";

@Injectable()
export class MongoCommentService<T> implements CommentAbstractRepository<T> {
    constructor(@InjectModel('Comment') private _repository: Model<T>) {
        // super()
    }

    async getAll(): Promise<T[]> {
        return await this._repository.find()
    }

    async get(id: string): Promise<T> {
        return await this._repository.findById({_id: id})
    }

    async create(data: object): Promise<any> {
        return this._repository.create(data)
    }

    async createComment(data: any): Promise<any> {
        const { id, content } = data

        console.log(id, content)
        

        await this._repository.findOneAndUpdate(
            {id: id},
            { $push: { comments : content } }
        )
    }

    async delete(id: string): Promise<void> {
        await this._repository.findByIdAndDelete(id)
    }

    async getAllPosts(data: any) {
        const mainData = data.map(async (item : any) => {
            const res = await this._repository.findOne({id: { $in: [item.postid] }})
            return {
                id: res.id,
                title: item.title,
                content: item.content,
                comment: res.comments
            }
        })

        const v = await Promise.all(mainData)
        
        return v
    }

    findPosts(): void {
        
    }
}
