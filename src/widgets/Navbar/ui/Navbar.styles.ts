import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    navbar: {
        position: 'relative',
        zIndex: 100,
        flexWrap: 'nowrap',
        maxWidth: '58%',
        background: theme.white,
        [theme.fn.smallerThan('md')]: {
            maxWidth: 'none',
            paddingTop: 20,
            paddingLeft: 30,
            paddingRight: 30,
            paddingBottom: 10,
        },
        [theme.fn.smallerThan('xs')]: {
            paddingLeft: 20,
            paddingRight: 20,
        },
    },
    menu: {
        '& li': {
            paddingLeft: 15,
            paddingRight: 15,
        },
        fontSize: theme.fontSizes.md,
    },
    mobailMenu: {
        display: 'flex',
        flexDirection: 'column',
        color: theme.black,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 90,
        fontWeight: 500,
        '& li': {
            marginBottom: 20,
        },
        [theme.fn.smallerThan('xs')]: {
            paddingLeft: 20,
            paddingRight: 20,
        },
    },
}))
