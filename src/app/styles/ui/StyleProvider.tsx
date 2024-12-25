import { FC, ReactNode } from 'react'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

interface StyleProviderProps {
    children: ReactNode
}

export const StyleProvider: FC<StyleProviderProps> = (props) => {
    const { children } = props

    return (
        <MantineProvider
            withNormalizeCSS
            theme={{
                fontFamily: 'Montserrat, sans serif',
                primaryColor: 'primary',
                primaryShade: 4,
                headings: {
                    fontWeight: 500,
                    fontFamily: 'Raleway, sans serif',
                    sizes: {
                        h1: {
                            fontSize: '42px',
                            lineHeight: '48px',
                        },
                        h2: {
                            fontSize: '32px',
                            lineHeight: '38px',
                        },
                        h3: {
                            fontSize: '18px',
                            lineHeight: '24px',
                        },
                    },
                },
                spacing: {
                    sm: '10px',
                    md: '18px',
                    xl: '24px',
                    lg: '32px',
                },
                fontSizes: {
                    sm: '14px',
                    md: '16px',
                    xl: '20px',
                },
                colors: {
                    inactive: ['#90BFD3', '#6b6bfa'],
                    primary: [
                        '#F5FBFE',
                        '#CBE7F3',
                        '#AAD3E4',
                        '#90BFD3',
                        '#69B1CF',
                        '#40A7D3',
                        '#1F9DD3',
                        '#0B91CA',
                        '#0086C2',
                        '#007AB5',
                    ],
                    secondary: [
                        '#C6C8FF',
                        '#969AFF',
                        '#767AF8',
                        '#5E62E8',
                        '#4D52D6',
                        '#4145C3',
                        '#2B2FBA',
                        '#191EB0',
                        '#090EA8',
                        '#0000A2',
                    ],
                },
                radius: {
                    sm: '10px',
                },
            }}
        >
            <Notifications />
            {children}
        </MantineProvider>
    )
}
