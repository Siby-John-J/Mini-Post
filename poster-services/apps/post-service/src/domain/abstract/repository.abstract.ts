
export abstract class AbstactRepository<T>{
    abstract getAll() : Promise<T[]>

    abstract get(id: string) : Promise<T>

    abstract create(data: object) : Promise<T>
}