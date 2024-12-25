import classNames from 'classnames'
import { FC, useEffect } from 'react'
import { Menu, Button, Text, Skeleton } from '@mantine/core'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { useDisclosure } from '@mantine/hooks'
import { LoginModal } from 'features/loginAuth'
import { IconUser, IconLogin } from '@tabler/icons-react'
import { getUserToken } from 'entities/User/model/selectors/getUserToken/getUserToken'
import { userActions } from 'entities/User/slices/userSlice'
import { useGetUserInfo } from 'entities/User/api/userApi'
import { useStyles } from './AuthButton.styles'

export const AuthButton: FC = () => {
    const { classes } = useStyles()

    const dispatch = useAppDispatch()

    const token = useSelector(getUserToken)
    const handleExit = () => {
        localStorage.removeItem('token')
        dispatch(userActions.reducerToken(''))
    }

    const [getUserInfo, { data, isLoading }] = useGetUserInfo()

    useEffect(() => {
        if (token) fetchUserInfo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    const fetchUserInfo = async () => {
        try {
            await getUserInfo().unwrap()
        } catch (e) {}
    }

    const [opened, { open, close }] = useDisclosure()

    return (
        <div className={classNames(classes.authButton, {})}>
            {!!token ? (
                <Menu shadow="md" width={200}>
                    <Menu.Target>
                        {isLoading ? (
                            <Skeleton height={36} width={100} />
                        ) : (
                            <Button variant="light" color="gray.9" fw={400}>
                                <IconUser size={'1rem'} />
                                <Text span ml={10}>
                                    {data?.result.name}
                                </Text>
                            </Button>
                        )}
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item onClick={handleExit}>Выйти</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            ) : (
                <Button variant="subtle" onClick={open} className={classes.btn}>
                    <IconLogin size={'1rem'} />
                    Войти
                </Button>
            )}
            <LoginModal onClose={close} opened={opened} />
        </div>
    )
}
