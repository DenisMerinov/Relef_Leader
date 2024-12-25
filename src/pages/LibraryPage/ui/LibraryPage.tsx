import { BreadcrumbsItem } from 'shared/ui/MyBreadcrumbs/MyBreadcrumbs'
import { PageBanner } from 'widgets/PageBanner'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Lesson } from 'entities/Lesson/model/types/lesson'
import { LessonCard } from 'entities/Lesson'
import { Box, Center, Grid, Loader, Pagination, Text } from '@mantine/core'
import { DownloadLessonButton } from 'features/downloadLesson'
import { useGetLessonList } from 'entities/Lesson/api/lessonApi'
import { useState, useEffect } from 'react'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { filterSkillsActions } from 'features/filterSkills/model/slices/FilterSkillsSlice'
import { FilterSkills } from 'features/filterSkills'
import { useSelector } from 'react-redux'
import { getSelectSkill } from 'features/filterSkills/model/selectors/getSelectSkill/getSelectSkill'

const breadcrumbs: BreadcrumbsItem[] = [
    {
        href: RoutePath.activity_list,
        title: 'Список активностей',
        inactive: true,
    },
    {
        href: RoutePath.library,
        title: 'Библиотека',
    },
]
const LibraryPage = () => {
    const { data, isLoading } = useGetLessonList()
    const [activePage, setPage] = useState<number>(1) // Счетчик страниц
    const itemsPerPage = 8 // Количество элементов на одной странице
    const [totalPages, setTotalPages] = useState<number>(0) // Общее количество страниц
    const [itemsForCurrentPage, setItemsForCurrentPage] = useState<Lesson[]>([]) // Элементы для текущей страницы

    const dispatch = useAppDispatch()
    const selectSkill = useSelector(getSelectSkill)

    useEffect(() => {
        if (data !== undefined) {
            let filteredData = data.result

            // Если selectSkill определен, фильтруем исходный массив данных
            if (selectSkill && selectSkill) {
                filteredData = filteredData.filter((lesson) =>
                    lesson.skills.some((skill) => skill.code === selectSkill)
                )
            }

            setItemsForCurrentPage(filteredData.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage))
            setTotalPages(Math.ceil(filteredData.length / itemsPerPage))
        }
    }, [data, activePage, itemsPerPage, selectSkill])

    useEffect(() => {
        if (data) {
            const allSkills: any = data.result.reduce((acc: any, activity: any) => {
                return acc.concat(activity.skills)
            }, [])

            const filteredSkills = allSkills.filter((skill: any, index: any, self: any) => {
                return index === self.findIndex((s: any) => s.code === skill.code)
            })

            console.log('filteredSkills', filteredSkills)

            dispatch(filterSkillsActions.reducerLessonSkills(filteredSkills))
        }
    }, [data, dispatch])

    return (
        <Box>
            <PageBanner
                breadcrumbs={breadcrumbs}
                text={
                    // eslint-disable-next-line max-len
                    'Здесь вы сможете найти все учебные материалы, памятки и презентации, предоставленные после обучения.'
                }
                subText="Материалы будут пополняться в течение всей образовательной программы до конца года"
                title="Библиотека"
                Filter={<FilterSkills />}
            />
            <Grid>
                {isLoading ? (
                    <Grid.Col order={12}>
                        <Center>
                            <Loader />
                        </Center>
                    </Grid.Col>
                ) : (
                    <>
                        {data?.result.length === 0 && (
                            <Grid.Col span={12} my={100}>
                                <Center>
                                    <Text fw={600}>Список уроков пуст</Text>
                                </Center>
                            </Grid.Col>
                        )}
                        {itemsForCurrentPage.map((lesson) => (
                            <Grid.Col key={lesson.uid} xs={12} sm={6} md={4} xl={3}>
                                <LessonCard
                                    item={lesson}
                                    ComponentActivity={<DownloadLessonButton href={lesson.file} />}
                                />
                            </Grid.Col>
                        ))}
                    </>
                )}
            </Grid>
            {totalPages !== 1 && (
                <Center>
                    <Pagination
                        mt="xl"
                        value={activePage}
                        onChange={setPage}
                        total={totalPages}
                        siblings={2}
                        size="sm"
                        position="center"
                    />
                </Center>
            )}
        </Box>
    )
}

export default LibraryPage
