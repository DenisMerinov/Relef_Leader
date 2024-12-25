import { FC, useEffect } from 'react'
import classNames from 'classnames'
import { Logo } from 'shared/ui/Logo/Logo'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { AuthButton } from 'widgets/AuthButton'
import { useMediaQuery, useDisclosure, useHeadroom } from '@mantine/hooks'
import { ActionIcon, Box, Drawer, Grid, rem } from '@mantine/core'
import { IconMenu2 } from '@tabler/icons-react'
import { useLocation } from 'react-router-dom'
import { useStyles } from './Navbar.styles'
import { navbarItemsList } from '../model/navbar'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props

    const { classes } = useStyles()

    const location = useLocation()

    const [opened, { close, toggle }] = useDisclosure()

    const sm = useMediaQuery('(min-width: 768px)')
    const md = useMediaQuery('(min-width: 992px)')

    const pinned = useHeadroom({ fixedAt: 120 })

    useEffect(() => {
        close()
    }, [location, close])

    return (
        <Box
            sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: rem(90),
                    zIndex: 1000000,
                    transform: `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
                    transition: 'transform 400ms ease',
                },
            })}
        >
            <Grid
                className={classes.navbar}
                align="center"
                gutter="xs"
                sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                        boxShadow: opened ? 'none' : '0px 9px 9px 0px rgba(2, 2, 2, 0.19)',
                    },
                })}
            >
                <Grid.Col span="content" orderSm={1} order={1}>
                    <Logo />
                </Grid.Col>
                <Grid.Col span="content" orderSm={2} order={3}>
                    {sm ? (
                        <ul className={classNames(classes.menu, {}, [className])}>
                            {navbarItemsList.map((el) => (
                                <li key={el.path}>
                                    <AppLink to={el.path}>{el.text}</AppLink>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <>
                            <ActionIcon onClick={toggle} color="gray.9">
                                <IconMenu2 />
                            </ActionIcon>
                            <Drawer position="top" onClose={close} opened={opened} padding={0}>
                                <ul className={classes.mobailMenu}>
                                    {navbarItemsList.map((el) => (
                                        <li key={el.path}>
                                            <AppLink to={el.path}>{el.text}</AppLink>
                                        </li>
                                    ))}
                                </ul>
                            </Drawer>
                        </>
                    )}
                </Grid.Col>
                <Grid.Col span="content" ml={md ? '' : 'auto'} orderSm={3} order={2}>
                    <AuthButton />
                </Grid.Col>
            </Grid>
        </Box>
    )
}
