import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    lessonCard: {
        padding: '35px 30px',
        height: '100%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#D8D9EB',
        borderRadius: 27,
        position: 'relative',
        paddingBottom: 120,
        '&:hover': {
            background: theme.colors.primary[0],
        },
    },
    icon: {
        width: 20,
        height: 20,
    },
    bottom: {
        position: 'absolute',
        bottom: 35,
        left: 20,
        right: 20,
    },
}))
