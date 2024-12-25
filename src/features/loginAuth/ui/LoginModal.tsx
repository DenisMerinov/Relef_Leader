import { Modal, TextInput, PasswordInput, Center, Button, Alert } from '@mantine/core'
import { EnterAuthType } from 'features/loginAuth/model/types/loginAuth'
import { useForm, isNotEmpty } from '@mantine/form'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import type { ModalProps } from '@mantine/core'
import { userActions } from 'entities/User/slices/userSlice'
import { notifications } from '@mantine/notifications'
import { useState } from 'react'
import { useAuth } from '../api/loginAuthApi'

export const LoginModal = (props: ModalProps) => {
    const { opened, onClose } = props

    const dispatch = useAppDispatch()

    const form = useForm<EnterAuthType>({
        initialValues: {
            login: '',
            password: '',
        },

        validate: {
            login: (value) => (/^\S+@\S+$/.test(value) ? null : 'Ошибка, укажите свой email'),
            password: isNotEmpty('Введите пароль'),
        },
    })

    const [error, setError] = useState<string>('')
    const [auth, { isLoading }] = useAuth()

    const handleAuth = async (user: EnterAuthType) => {
        try {
            const response = await auth(user).unwrap()
            localStorage.setItem('token', response.result)
            dispatch(userActions.reducerToken(response.result))
            onClose()
        } catch (e: any) {
            setError(e.data.message)
            notifications.show({
                color: 'red',
                message: e.data.message,
                title: 'Ошибка авторизации!',
            })
        }
    }
    return (
        <Modal opened={opened} onClose={onClose} title="Авторизация" centered>
            <form onSubmit={form.onSubmit((values: EnterAuthType) => handleAuth(values))}>
                {error && (
                    <Alert title="Ошибка авторизации!" color="red" withCloseButton onClose={() => setError('')}>
                        {error}
                    </Alert>
                )}
                <TextInput
                    label="Ваш email"
                    placeholder="Введите email"
                    withAsterisk
                    mt="md"
                    {...form.getInputProps('login')}
                />
                <PasswordInput
                    label="Ваш пароль"
                    placeholder="Введите пароль"
                    withAsterisk
                    mt="md"
                    {...form.getInputProps('password')}
                />
                <Center mt="lg">
                    <Button type="submit" loading={isLoading}>
                        Войти
                    </Button>
                </Center>
            </form>
        </Modal>
    )
}
