import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    appLink: {
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}))
