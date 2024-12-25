import { FC, ReactNode } from 'react'
import { Grid, Badge, Title, Group, Text, ScrollArea, HoverCard, Button } from '@mantine/core'
import { IconUser } from '@tabler/icons-react'
import { useStyles } from './LessonCard.styles'
import { Lesson } from '../model/types/lesson'

interface LessonCardProps {
    item: Lesson
    ComponentActivity?: ReactNode
}

export const LessonCard: FC<LessonCardProps> = (props) => {
    const { item, ComponentActivity } = props

    const { classes } = useStyles()

    return (
        <div className={classes.lessonCard}>
            <Grid gutter="xs" mb="md">
                {item.skills &&
                    item.skills.map((skill) => (
                        <Grid.Col span={12} key={skill.name}>
                            <Badge
                                sx={skill.color !== null ? { borderColor: skill.color, color: skill.color } : {}}
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
                    <Badge color="green" size="lg" radius="md" variant="filled" fullWidth>
                        {item.type_name}
                    </Badge>
                </Grid.Col>
            </Grid>
            <Title order={3} mb="sm">
                {item.title}
            </Title>
            <ScrollArea h={150} mb="sm">
                <Text pr="sm">{item.description}</Text>
            </ScrollArea>
            <div className={classes.bottom}>
                <Group spacing="xs" mb="md">
                    {item.icon_path != null ? (
                        <img src={item.icon_path} className={classes.icon} alt="" />
                    ) : (
                        <IconUser stroke={1.3} />
                    )}
                    {item.teacher_name !== null && item.teacher_name !== '' && (
                        <HoverCard width={'100%'} shadow="md">
                            <HoverCard.Target>
                                <Button
                                    compact
                                    variant="light"
                                >{`${item.teacher_name} ${item.teacher_last_name}`}</Button>
                            </HoverCard.Target>
                            <HoverCard.Dropdown>
                                <Text size="sm">
                                    {`${item.teacher_name} 
                                ${item.teacher_last_name} 
                                ${item.teacher_patronymic} 
                                ${item.teacher_job_title !== null ? item.teacher_job_title : ''}`}
                                </Text>
                            </HoverCard.Dropdown>
                        </HoverCard>
                    )}
                </Group>
                <Group position="right">{ComponentActivity}</Group>
            </div>
        </div>
    )
}
