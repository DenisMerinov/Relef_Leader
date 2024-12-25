import { FC } from 'react'
import classNames from 'classnames'
import { Breadcrumbs } from '@mantine/core'
import { ReactComponent as ArrowRightSVG } from 'shared/assets/icons/icon-arrow-right.svg'
import { useStyles } from './MyBreadcrumbs.styles'
import { AppLink } from '../AppLink/AppLink'

interface MyBreadcrumbsProps {
    className?: string
    data?: BreadcrumbsItem[]
}

export interface BreadcrumbsItem {
    href: string
    title: string
    inactive?: boolean
}

export const MyBreadcrumbs: FC<MyBreadcrumbsProps> = (props) => {
    const { className, data } = props

    const { classes } = useStyles()

    return (
        <Breadcrumbs separator={<ArrowRightSVG />} className={className}>
            {data &&
                data.map((item, index) => (
                    <AppLink
                        to={item.href}
                        key={index}
                        className={classNames(classes.link, {
                            [classes.linkInactive]: item.inactive,
                        })}
                    >
                        {item.title}
                    </AppLink>
                ))}
        </Breadcrumbs>
    )
}
