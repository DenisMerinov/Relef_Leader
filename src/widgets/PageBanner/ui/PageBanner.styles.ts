import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    pageBanner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 70,
    },
    pageInfo: {
        maxWidth: '50%',
        flexGrow: 1,
        [theme.fn.smallerThan('sm')]: {
            maxWidth: 'none',
        },
    },
    pageImg: {
        maxWidth: '40%',
        flexGrow: 1,
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },
    imgBack: {
        marginTop: -85,
    },
    title: {
        [theme.fn.smallerThan('sm')]: {
            fontSize: '28px',
            lineHeight: '38px',
        },
    },
}))
