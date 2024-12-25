import { Global } from '@mantine/core'

export const GlobalStyles = () => (
    <Global
        styles={(theme) => ({
            '*': {
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
            },
            body: {
                fontFamily: theme.fontFamily,
            },
            ul: {
                display: 'flex',
                listStyleType: 'none',
            },
            '.app': {
                minHeight: '100vh',
                position: 'relative',
                overflowX: 'hidden',
            },
            '.content-page': {
                maxWidth: 1680,
                padding: 30,
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingBottom: 200,
                [theme.fn.smallerThan('xs')]: {
                    padding: '30px 20px',
                    paddingBottom: 200,
                },
            },
            '.page-wrapper': {
                [theme.fn.smallerThan('sm')]: {
                    paddingTop: 130,
                },
            },
        })}
    />
)
