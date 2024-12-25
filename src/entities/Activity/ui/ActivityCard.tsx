import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { Badge, Grid, Title, Text, Group, ScrollArea, Button, HoverCard } from '@mantine/core'
import { IconUser, IconHourglassHigh, IconCalendarEvent } from '@tabler/icons-react'
import dayjs from 'dayjs'
import { useStyles } from './ActivityCard.styles'
import { Activity } from '../model/types/activity'

interface ActivityCardProps {
    item: Activity
    ComponentActivity: ReactNode
}

export const ActivityCard: FC<ActivityCardProps> = (props) => {
    const { item, ComponentActivity } = props

    const { classes } = useStyles()

    const isBeforeDate = dayjs(item.date).isBefore(dayjs())

    const mods = {
        [classes.active]: item.entry,
        [classes.disabled]: isBeforeDate || item.all_seats_are_occupied,
    }

    const primaryColor = isBeforeDate ? 'gray.7' : 'primary'
    const primaryColor2 = isBeforeDate ? '#495057' : '#69B1CF'

    return (
        <div className={classNames(classes.activityCard, mods)}>
            {item.entry && <div className={classes.activeHeader}></div>}
            <Grid gutter="xs" mb="md">
                {item.skills.map((skill) => (
                    <Grid.Col span={12} key={skill.name}>
                        <Badge
                            sx={!skill.color ? undefined : { color: skill.color, borderColor: skill.color }}
                            size="lg"
                            radius="md"
                            variant="outline"
                            fullWidth
                        >
                            {skill.name}
                        </Badge>
                    </Grid.Col>
                ))}
                <Grid.Col span={12}>
                    <Badge
                        size="lg"
                        radius="md"
                        variant="filled"
                        fullWidth
                        sx={
                            !item.type_color ? undefined : { borderColor: item.type_color, background: item.type_color }
                        }
                    >
                        {item.type_name}
                    </Badge>
                </Grid.Col>
            </Grid>
            <Title order={3} mb="md">
                {item.name}
            </Title>
            <ScrollArea h={150} mb="sm">
                <Text pr="sm">{item.description}</Text>
            </ScrollArea>
            <div className={classes.footer}>
                <Group spacing="xs" mb="md">
                    {item.icon_path != null ? (
                        <img src={item.icon_path} className={classes.icon} alt="" />
                    ) : (
                        <IconUser stroke={1.3} color={primaryColor2} />
                    )}
                    <HoverCard width={'100%'} shadow="md">
                        <HoverCard.Target>
                            <Button
                                compact
                                variant="light"
                                color={primaryColor}
                            >{`${item.teacher_name} ${item.teacher_last_name}`}</Button>
                        </HoverCard.Target>
                        <HoverCard.Dropdown>
                            <Text size="sm">
                                {`${item.teacher_name} 
                                ${item.teacher_last_name} 
                                ${item.teacher_patronymic} 
                                ${item.teacher_job_title ?? ''}`}
                            </Text>
                        </HoverCard.Dropdown>
                    </HoverCard>
                </Group>
                <Grid justify="space-between" gutter={0}>
                    <Grid.Col span={'content'}>
                        <Group spacing="xs" mb={4}>
                            <IconCalendarEvent size={'1rem'} color={primaryColor2} />
                            <Text span color={primaryColor}>
                                {item.date_print}
                            </Text>
                        </Group>
                        <Group spacing="xs">
                            <IconHourglassHigh size={'1rem'} color={primaryColor2} />
                            <Text span color={primaryColor}>
                                {item.training_period}
                            </Text>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={'content'}>
                        {isBeforeDate ? (
                            <Badge color="gray.7">Завершено</Badge>
                        ) : (
                            <Group position="right">{ComponentActivity}</Group>
                        )}
                    </Grid.Col>
                </Grid>
            </div>
        </div>
    )
}
