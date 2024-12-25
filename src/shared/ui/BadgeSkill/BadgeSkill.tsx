import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import { useStyles } from './BadgeSkill.styles'

interface BadgeSkillProps {
    className?: string
    children: ReactNode
    skillType?: string
}

export const BadgeSkill: FC<BadgeSkillProps> = (props) => {
    const { className, skillType, children } = props

    const { classes } = useStyles()
    return (
        <div className={classNames(classes.badgeSkill, {}, [className])}>
            {children}
        </div>
    )
}
