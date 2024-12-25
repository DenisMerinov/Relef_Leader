export interface LessonResponse {
    status: string
    result: Lesson[]
}

export interface Lesson {
    uid: string
    title: string
    description: string
    teacher_name: string
    teacher_last_name: string
    teacher_patronymic: string
    teacher_full_name: string
    type_name: string
    type_code: string
    icon_path: string
    file: string
    skills: LessonSkills[]
    teacher_job_title: string
}

export interface LessonSkills {
    name: string
    code: string
    color: string | null
}
