export interface RatingListResponse {
    status: string
    result: RatingList[]
}

export interface RatingList {
    name: string
    last_name: string
    patronymic: string
    full_name: string
    department_name: string
    score: number
}
