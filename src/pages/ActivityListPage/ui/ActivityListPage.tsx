import { PageBanner } from 'widgets/PageBanner'
import { useGetActivityList, ActivityCard } from 'entities/Activity'
import { Center, Grid, LoadingOverlay, Pagination, Text, Title } from '@mantine/core'
import { RecordActivityButtom } from 'features/recordActivity'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserToken } from 'entities/User/model/selectors/getUserToken/getUserToken'
import 'dayjs/locale/ru'

const ActivityListPage = () => {
    const { data, refetch, isFetching } = useGetActivityList()

    const itemsPerPage = 8 // Количество элементов на одной странице
    const totalPages = data?.result.length ? Math.ceil(data.result.length / itemsPerPage) : 0 // Общее количество страниц

    const [activePage, setActivePage] = useState<number>(totalPages) // Счетчик страниц
    const limitedData = data ? data.result.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage) : null
    const token = useSelector(getUserToken)

    useEffect(() => {
        refetch()
    }, [refetch, token])

    useEffect(() => {
        setActivePage(totalPages)
    }, [totalPages])

    return (
        <>
            <PageBanner
                text={
                    //  eslint-disable-next-line max-len
                    'Программа обучения направлена на развитие управленческих компетенций сотрудников компании "Рельеф-Центр".'
                }
                //  eslint-disable-next-line max-len
                subText="Новый формат организации программы позволит руководителям выбирать удобную дату и время для своего обучения. А разные формы образовательных активностей от приглашенных спикеров и ведущих экспертов позволят развить важнейшие компетенции."
                title="Программа развития руководителей"
            />
            {/* <Title order={2} mb={32}>{`Расписание активностей на ${capitalizedMonth}`}</Title> */}
            <Title order={2} mb={32}>
                Расписание активностей
            </Title>
            <Grid pos="relative" mih={200}>
                <LoadingOverlay visible={isFetching} loaderProps={{ size: 'xl' }} />
                {limitedData?.length === 0 && (
                    <Grid.Col span={12} my={100}>
                        <Center>
                            <Text fw={600}>Календарь активностей пуст</Text>
                        </Center>
                    </Grid.Col>
                )}
                {limitedData?.map((activity) => (
                    <Grid.Col xs={12} sm={6} md={4} xl={3} key={activity.uid}>
                        <ActivityCard
                            item={activity}
                            ComponentActivity={
                                <RecordActivityButtom
                                    uid={activity.uid}
                                    active={activity.entry}
                                    title={activity.name}
                                    statusFull={activity.all_seats_are_occupied}
                                />
                            }
                        />
                    </Grid.Col>
                ))}
            </Grid>
            {totalPages !== 1 && (
                <Center>
                    <Pagination
                        mt="xl"
                        value={activePage}
                        onChange={setActivePage}
                        total={totalPages}
                        siblings={2}
                        size="sm"
                        position="center"
                    />
                </Center>
            )}
        </>
    )
}

export default ActivityListPage
