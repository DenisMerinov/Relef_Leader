import { FC } from 'react'
import classNames from 'classnames'
import { useStyles } from './Tag.styles'

export enum TagStatus {
    CONTROL = 'control',
    SPEECH = 'speech',
    ATTENTION = 'attention',
    ONLINE = 'online',
    OFFLINE = 'offline',
}

export enum TagSize {
    M = 'size_m',
    L = 'size_l',
}

export interface TagProps {
    className?: string
    status: TagStatus
    size?: TagSize
}

const TagStatusTexts = {
    [TagStatus.CONTROL]: '#Управление',
    [TagStatus.SPEECH]: '#Речь',
    [TagStatus.ATTENTION]: '#Внимание',
    [TagStatus.ONLINE]: 'Online',
    [TagStatus.OFFLINE]: 'Очно',
}

export const Tag: FC<TagProps> = (props) => {
    const { className, status, size = TagSize.L } = props

    const { classes } = useStyles()

    return (
        <div className={classNames(classes.tag, {}, [className, status, size])}>
            {TagStatusTexts[status]}
        </div>
    )
}
