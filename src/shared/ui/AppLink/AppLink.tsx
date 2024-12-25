import { ReactNode, memo } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'
import { Text } from '@mantine/core'
import { useStyles } from './AppLink.styles'

interface AppLinkProps extends LinkProps {
    className?: string
    children: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
    const { className, to, children, ...otherProps } = props

    const { classes } = useStyles()

    return (
        <Link className={classNames(classes.appLink, {}, [className])} to={to} {...otherProps}>
            <Text>{children}</Text>
        </Link>
    )
})
