export type LogEntity = {
    id: number,
    name: string,
    image?:string,
    platform:string,
    genre:string,
    status?:string,
    rating?:number
    review?:string
} 

export type Log = Omit<LogEntity, "id"> 