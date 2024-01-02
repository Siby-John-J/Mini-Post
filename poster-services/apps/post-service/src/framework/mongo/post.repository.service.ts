import { Model } from "mongoose";
import { AbstactRepository } from "../../domain";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class postRepository<T> implements AbstactRepository<T> {
    constructor(@InjectModel('Post') private _repository: Model<T>) {
        // super()
    }
    
    async getAll(): Promise<T[]> {
        return await this._repository.find()
    }

    async get(id: string): Promise<T> {
        return await this._repository.findById(id)
    }

    async create(data: object): Promise<T> {
        return await this._repository.create(data)
    }
}