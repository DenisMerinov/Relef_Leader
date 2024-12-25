import { Accordion } from '@mantine/core'
import { FAQ } from '../model/types/faq'

interface FaqItemProps {
    item: FAQ
}

export const FaqItem = (props: FaqItemProps) => {
    const { item } = props

    return (
        <Accordion.Item value={item.question}>
            <Accordion.Control>{item.question}</Accordion.Control>
            <Accordion.Panel>{item.answer}</Accordion.Panel>
        </Accordion.Item>
    )
}
