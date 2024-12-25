import { FC } from 'react'
import { Button, Group, Modal, Title, Text, Badge } from '@mantine/core'
import { useSelector } from 'react-redux'
import { LoginModal } from 'features/loginAuth'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { notifications } from '@mantine/notifications'
import { getUserToken } from 'entities/User/model/selectors/getUserToken/getUserToken'
import { useRecordActivity } from '../api/recordActivityApi'

interface RecordActivityProps {
    uid: string
    active: boolean
    title: string
    statusFull: boolean
}

export const RecordActivityButtom: FC<RecordActivityProps> = (props) => {
    const { uid, active, title, statusFull } = props

    const token = useSelector(getUserToken)

    const [openedModalAuth, { open: openModalAuth, close: closeModalAuth }] = useDisclosure()
    const [openedModalRecord, { open: openModalRecord, close: closeModalRecord }] = useDisclosure()

    const [recordActivity, { isLoading }] = useRecordActivity()

    const sm = useMediaQuery('(max-width: 768px)')

    const handleRecord = async () => {
        try {
            await recordActivity({ uid })
            closeModalRecord()
        } catch (e: any) {
            notifications.show({
                color: 'red',
                message: e.data.message,
                title: 'Ошибка записи!',
            })
        }
    }

    const handleAuth = () => {
        openModalAuth()
    }

    return (
        <>
            {active ? (
                <Badge color="secondary" variant="filled">
                    Вы записаны
                </Badge>
            ) : statusFull ? (
                <Badge color="gray.7">Запись закрыта</Badge>
            ) : (
                <Button onClick={!!token ? openModalRecord : handleAuth}>Записаться</Button>
            )}
            <LoginModal onClose={closeModalAuth} opened={openedModalAuth} />
            <Modal centered opened={openedModalRecord} onClose={closeModalRecord} withCloseButton={false} padding={30}>
                <Title order={3} mb="lg" align="center">
                    Подтвердите запись
                </Title>
                <Text mb="lg" align="justify">
                    Вы действительно хотите записаться на {title}
                </Text>
                <Group position="right">
                    <Button onClick={handleRecord} loading={isLoading} fullWidth={sm ? true : false}>
                        Подтвердить
                    </Button>
                    <Button onClick={closeModalRecord} color="red.3" fullWidth={sm ? true : false}>
                        Отклонить
                    </Button>
                </Group>
            </Modal>
        </>
    )
}
