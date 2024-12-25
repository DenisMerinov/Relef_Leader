import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    activityCard: {
        height: '100%',
        padding: '35px 20px',
        paddingBottom: 140,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#D8D9EB',
        position: 'relative',
        borderRadius: 27,
        '&:hover': {
            background: theme.colors.primary[0],
        },
    },
    footer: {
        position: 'absolute',
        bottom: 35,
        left: 20,
        right: 20,
    },
    active: {
        background: theme.colors.primary[2],
        '&:hover': {
            background: theme.colors.primary[1],
        },
    },
    disabled: {
        background: theme.colors.gray[3],
        '&:hover': {
            background: theme.colors.gray[3],
        },
    },
    online: {
        background: theme.colors.green[4],
    },
    activeHeader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 35,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 20,
        height: 20,
    },
}))
