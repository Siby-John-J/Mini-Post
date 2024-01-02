
export abstract class CommentAbstractRepository<T> {
    abstract getAll() : Promise<T[]>
    
    abstract get(id: string) : Promise<T>
    
    abstract create(data: object) : Promise<string>

    abstract createComment(data: object) : Promise<any>
    
    abstract delete(id: string) : void

    abstract findPosts() : void

    abstract getAllPosts(data: any) : any
}
