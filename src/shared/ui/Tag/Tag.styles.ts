import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    tag: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 8,
        '&.size_m': {
            margin: '0 4px',
            padding: '6px 17px',
            fontSize: 12,
        },
        '&.size_l': {
            margin: '0 4px',
            padding: '8px 17px',
            fontSize: 15,
        },
        '&.control': {
            borderColor: '#FBBF20',
            color: '#FBBF20',
        },
        '&.speech': {
            borderColor: '#D2A5DB',
            color: '#D2A5DB',
        },
        '&.attention': {
            borderColor: '#D1D871',
            color: '#D1D871',
        },
        '&.online': {
            borderColor: '#4DBE58',
            color: '#FFF',
            background: '#4DBE58',
        },
        '&.offline': {
            borderColor: '#BABABA',
            color: '#FFF',
            background: '#BABABA',
        },
        '&:first-of-type': {
            marginLeft: 0,
        },
    },
}))
