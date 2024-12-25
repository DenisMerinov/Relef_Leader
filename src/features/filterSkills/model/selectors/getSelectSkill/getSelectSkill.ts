import { StateScheme } from 'app/providers/StoreProvider/config/StateScheme'

export const getSelectSkill = (state: StateScheme) => {
    return state.filterSkills.selectSkill
}
