import { FC } from 'react'
import { Table, Center, Text, LoadingOverlay, Box, Card, Alert, Button } from '@mantine/core'
import { useSelector } from 'react-redux'
import { getUserToken } from 'entities/User/model/selectors/getUserToken/getUserToken'
import { LoginModal } from 'features/loginAuth'
import { useDisclosure } from '@mantine/hooks'
import { useGetRatingList } from '../api/ratingApi'
import { RatingList } from '../model/types/rating'

export const RatingTable: FC = () => {
    const token = useSelector(getUserToken)
    const { data, isLoading } = useGetRatingList()
    const [openedLogin, { close: closeLogin, open: openLogin }] = useDisclosure()
    const getRankedData = (data: RatingList[]) => {
        const sortedData = [...data].sort((a, b) => b.score - a.score)

        let rank = 1
        let lastScore = sortedData[0]?.score

        return sortedData
            .filter((element) => element.score > 0)
            .map((element, index) => {
                if (element.score < lastScore) {
                    rank = index + 1
                    lastScore = element.score
                }

                return { ...element, rank }
            })
    }

    const rankedData = data ? getRankedData(data.result) : null

    const rows =
        rankedData && rankedData?.length > 0 ? (
            rankedData.map((element, index) => (
                <tr key={index}>
                    <td align="center">{element.rank}</td>
                    <td>{`${element.last_name} ${element.name} ${element.patronymic}`}</td>
                    <td>{element.department_name}</td>
                    <td align="center">{element.score}</td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={4} align="center">
                    Таблица пуста
                </td>
            </tr>
        )

    if (!token) {
        return (
            <Center>
                <Card maw={400} w={'100%'}>
                    <Alert color="blue">
                        <Text fw={600} ta={'center'} mb={30}>
                            Для просмотра рейтинговой таблицы, необходимо авторизоваться!
                        </Text>
                        <Button onClick={openLogin} fullWidth>
                            Войти
                        </Button>
                        <LoginModal opened={openedLogin} onClose={closeLogin} />
                    </Alert>
                </Card>
            </Center>
        )
    }

    if (token) {
        return (
            <Box pos={'relative'} mih={200}>
                <LoadingOverlay visible={isLoading} />
                {data?.result.length === 0 ? (
                    <Center h={'100%'}>
                        <Card maw={600} withBorder shadow="md">
                            <Text ta="justify">
                                В настоящее время баллы еще не начислены ни одному из пользователей. Как только поступят
                                первые результаты, мы немедленно обновим таблицу рейтингов.
                            </Text>
                        </Card>
                    </Center>
                ) : (
                    <Table verticalSpacing="md" highlightOnHover withBorder>
                        <thead>
                            <tr>
                                <th>
                                    <Text ta="center">№</Text>
                                </th>
                                <th>ФИО</th>
                                <th>Департамент</th>
                                <th>
                                    <Text ta="center">Баллы</Text>
                                </th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </Table>
                )}
            </Box>
        )
    }

    return null
}
