import { FC } from 'react'
import { Button } from '@mantine/core'

interface DownloadLessonButtonProps {
    href: string
}

export const DownloadLessonButton: FC<DownloadLessonButtonProps> = (props) => {
    const { href } = props
    return (
        <Button component="a" href={href} target="_blank">
            Скачать
        </Button>
    )
}
