// import { Model } from "mongoose";
// import { CommentAbstractRepository } from "../../domain/abastract/comment.rep.abastract";

// export class CommentRepository<T> implements CommentAbstractRepository<T> {
//     private _repository: Model<T>

//     constructor(readonly commentModel: Model<T>) {
//         this._repository = commentModel
//     }
    
//     async getAll(): Promise<T[]> {
//         return await this._repository.find() 
//     }

//     async get(id: string): Promise<T> {
//         return await this._repository.findById({_id: id})
//     }

//     async create(data: object): Promise<any> {
//         return this._repository.create(data)
//     }

//     async delete(id: string): Promise<void> {
//         await this._repository.findByIdAndDelete(id)
//     }
    
//     async findPosts() : Promise<any> {
//         return await this._repository.find()
//     }

//     async getAllPosts(data: any) {
//         const mainData = []

//         data.map(async (item) => {
//             console.log(item)
//             // const res = await this._repository.findOne({id: { $in: [item.id] }})
//             // console.log(res, 'herer')
//         })
//     }
// }