export interface FeedbackResponse {
    status: string
    result: FeedbackTypes
}

export interface FeedbackTypes {
    email: string
    tg: string
    whatsapp: string
    vk: string
    instagram: string
}
