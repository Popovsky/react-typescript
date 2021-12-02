export interface IUpdateTask {
    id: number,
    content?: string,
    status?: 0 | 1 | 2,
}

export interface ITask {
    id: number,
    content: string,
    status: 0 | 1 | 2,
    createdAt: number,
    updatedAt: number,
}
