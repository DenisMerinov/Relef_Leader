import classNames from 'classnames'
import { FC } from 'react'
import { Image } from '@mantine/core'
import { Feedback } from 'entities/Feedback/ui/Feedback'
import { useStyles } from './Footer.styles'

interface FooterProps {
    className?: string
}

export const Footer: FC<FooterProps> = (props) => {
    const { className } = props

    const { classes } = useStyles()

    return (
        <div className={classNames(classes.footer, {}, [className])}>
            <Image width="auto" src="assets/images/footer-left-img.png" className={classes.leftImg} />
            <Image width="auto" src="assets/images/footer-right-img.png" className={classes.rightImg} />
            <div className={classes.footerText}>
                {/* <Text component="a" href="mailto:MurchalinaNV.hr@relef.ru" fw={700}>
                    MurchalinaNV.hr@relef.ru
                </Text> */}
                <Feedback />
            </div>
        </div>
    )
}
