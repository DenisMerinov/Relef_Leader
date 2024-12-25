import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Chip, Grid } from '@mantine/core'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { getSelectSkill } from '../../model/selectors/getSelectSkill/getSelectSkill'
import { getLessonSkills } from '../../model/selectors/getLessonSkills/getLessonSkills'
import { filterSkillsActions } from '../../model/slices/FilterSkillsSlice'

export const FilterSkills: FC = () => {
    const dispatch = useAppDispatch()

    const lessonSkills = useSelector(getLessonSkills)
    const selectSkill = useSelector(getSelectSkill)

    const onChangeFilter = (value: string) => {
        dispatch(filterSkillsActions.reducerSelectSkill(value))
    }

    return (
        <div>
            <Chip.Group onChange={onChangeFilter}>
                <Grid gutter={5}>
                    {lessonSkills.map((skill) => (
                        <Grid.Col span="content" key={skill.code}>
                            <Chip value={skill.code} variant="filled">
                                {skill.name}
                            </Chip>
                        </Grid.Col>
                    ))}
                    <Grid.Col span="content">
                        <Chip color="red" disabled={selectSkill === ''}>
                            Сбросить фильтр
                        </Chip>
                    </Grid.Col>
                </Grid>
            </Chip.Group>
        </div>
    )
}
