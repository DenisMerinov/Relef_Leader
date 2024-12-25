export interface FAQResponse {
    status: string
    result: FAQ[]
}

export interface FAQ {
    question: string
    answer: string
}
