import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FilterSkillsStateScheme, Skill } from '../types/filterSkills'

const initialState: FilterSkillsStateScheme = {
    lessonSkills: [],
    selectSkill: '',
}

export const filterSkillsSlice = createSlice({
    name: 'filterSkills',
    initialState,
    reducers: {
        reducerLessonSkills: (state, action: PayloadAction<Skill[]>) => {
            state.lessonSkills = action.payload
        },
        reducerSelectSkill: (state, action: PayloadAction<string>) => {
            state.selectSkill = action.payload
        },
    },
    extraReducers: () => {},
})

export const { actions: filterSkillsActions } = filterSkillsSlice
export const { reducer: filterSkillsReducer } = filterSkillsSlice
