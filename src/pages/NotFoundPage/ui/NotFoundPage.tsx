import classNames from 'classnames'
import { useStyles } from './NotFoundPage.styles'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { classes } = useStyles()

    return <div className={classNames(classes.notFoundPage, {}, [className])}>Страница не найдена</div>
}
