import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    footer: {
        height: 130,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    leftImg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '25%',
    },
    rightImg: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: '25%',
    },
    footerText: {
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        padding: '0 30px',
        [theme.fn.smallerThan('sm')]: {
            textAlign: 'center',
        },
        [theme.fn.smallerThan('xs')]: {
            textAlign: 'center',
            padding: '0 20px',
        },
    },
}))
