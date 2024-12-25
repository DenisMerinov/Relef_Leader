export interface ActivityResponse {
    status: string
    result: Activity[]
}

export interface Activity {
    uid: string
    date: string
    date_print: string
    name: string
    description: string
    training_period: string
    teacher_name: string
    teacher_last_name: string
    teacher_patronymic: string
    teacher_full_name: string
    type_name: string
    type_code: string
    entry: boolean
    skills: ActivitySkills[]
    icon_path: string
    teacher_job_title: string
    type_color: string
    all_seats_are_occupied: boolean
}

export interface ActivitySkills {
    name: string
    code: string
    color: string | null
}
