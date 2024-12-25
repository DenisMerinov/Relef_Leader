import { StateScheme } from 'app/providers/StoreProvider/config/StateScheme'

export const getLessonSkills = (state: StateScheme) => {
    return state.filterSkills.lessonSkills
}
