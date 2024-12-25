import { combineReducers } from '@reduxjs/toolkit'
import { rtkApi } from 'shared/api/rtkApi'
import { userSlice } from 'entities/User'
import { filterSkillsSlice } from 'features/filterSkills'
import { StateScheme } from './StateScheme'

const rootReducer = combineReducers({
    user: userSlice.reducer,
    filterSkills: filterSkillsSlice.reducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
})

export type RootState = StateScheme
export default rootReducer
