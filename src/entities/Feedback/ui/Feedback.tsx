import { FC } from 'react'
import { ActionIcon, Box, Button, Group, Skeleton, Text } from '@mantine/core'
import { IconMail, IconBrandTelegram, IconBrandWhatsapp, IconBrandInstagram, IconBrandVk } from '@tabler/icons-react'
import { useMediaQuery } from '@mantine/hooks'
import { useGetFeedbackLinks } from '../api/feedbackApi'
import { FeedbackTypes } from '../model/types/feedback'

export const Feedback: FC = () => {
    const { data: dataFeedback, isLoading: isLoadingFeedback } = useGetFeedbackLinks()

    const md = useMediaQuery('(max-width: 1200px)')

    function areAllKeysEmptyOrNull(obj: FeedbackTypes) {
        return Object.values(obj).every((value) => value === '' || value === null)
    }

    return (
        <Box>
            {isLoadingFeedback ? (
                <Skeleton height={25} width={300} />
            ) : (
                <>
                    {dataFeedback?.result && areAllKeysEmptyOrNull(dataFeedback?.result) ? (
                        <></>
                    ) : (
                        <>
                            <Text maw={600} ta={'center'} mb={10} fw={600} bg={md ? '#FFF' : undefined}>
                                Обратная связь
                            </Text>
                            <Group bg={md ? '#FFF' : undefined} p={md ? 10 : undefined}>
                                {dataFeedback?.result.email && (
                                    <Button
                                        leftIcon={<IconMail />}
                                        component="a"
                                        href={`mailto:${dataFeedback?.result.email}`}
                                        compact
                                        color="dark"
                                        variant="subtle"
                                    >
                                        {dataFeedback?.result.email}
                                    </Button>
                                )}
                                {dataFeedback?.result.tg && (
                                    <ActionIcon
                                        component="a"
                                        href={dataFeedback?.result.tg}
                                        variant="subtle"
                                        color="dark"
                                    >
                                        <IconBrandTelegram />
                                    </ActionIcon>
                                )}
                                {dataFeedback?.result.whatsapp && (
                                    <ActionIcon
                                        component="a"
                                        href={dataFeedback?.result.whatsapp}
                                        variant="subtle"
                                        color="dark"
                                    >
                                        <IconBrandWhatsapp />
                                    </ActionIcon>
                                )}
                                {dataFeedback?.result.instagram && (
                                    <ActionIcon
                                        component="a"
                                        href={dataFeedback?.result.instagram}
                                        variant="subtle"
                                        color="dark"
                                    >
                                        <IconBrandInstagram />
                                    </ActionIcon>
                                )}
                                {dataFeedback?.result.vk && (
                                    <ActionIcon
                                        component="a"
                                        href={dataFeedback?.result.vk}
                                        variant="subtle"
                                        color="dark"
                                    >
                                        <IconBrandVk />
                                    </ActionIcon>
                                )}
                            </Group>
                        </>
                    )}
                </>
            )}
        </Box>
    )
}
