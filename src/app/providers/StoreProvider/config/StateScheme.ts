import { UserStateScheme } from 'entities/User/model/types/user'
import { FilterSkillsStateScheme } from 'features/filterSkills/model/types/filterSkills'

export interface StateScheme {
    user: UserStateScheme
    filterSkills: FilterSkillsStateScheme
}
