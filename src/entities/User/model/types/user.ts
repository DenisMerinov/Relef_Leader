export interface UserStateScheme {
    token: string
}

export interface UserInfoResponse {
    status: string
    result: UserInfo
}

export interface UserInfo {
    name: string
    last_name: string
    patronymic: string
    email: string
    phone: string
    score: number
    department_name: string | null
    full_name: string
}
