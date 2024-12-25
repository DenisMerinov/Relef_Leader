export interface FilterSkillsStateScheme {
    lessonSkills: Skill[]
    selectSkill: string
}

export interface Skill {
    name: string
    code: string
    color: string
}
