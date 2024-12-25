import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { PageBanner } from 'widgets/PageBanner'
import { BreadcrumbsItem } from 'shared/ui/MyBreadcrumbs/MyBreadcrumbs'
import { useGetFaqList } from 'entities/Faq/api/faqApi'
import { Accordion, Center, Loader } from '@mantine/core'
import { FaqItem } from 'entities/Faq'

const breadcrumbs: BreadcrumbsItem[] = [
    {
        href: RoutePath.activity_list,
        title: 'Список активностей',
        inactive: true,
    },
    {
        href: RoutePath.faq,
        title: 'FAQ',
    },
]

const FaqPage = () => {
    const { data, isLoading } = useGetFaqList()

    return (
        <>
            <PageBanner
                breadcrumbs={breadcrumbs}
                text={
                    // eslint-disable-next-line max-len
                    'Собрали на одной странице ответы на самые частые вопросы о Программе развития руководителей и работе сайта'
                }
                // eslint-disable-next-line max-len
                subText="Не нашли ответа на свой вопрос? Пишите руководителю проекта Ирине Ворнаковой удобным вам способом!"
                title="FAQ"
            />
            {isLoading ? (
                <Center>
                    <Loader />
                </Center>
            ) : (
                <Center>
                    <Accordion defaultValue={data?.result[0].question} variant="separated" maw={900}>
                        {data?.result.map((faq, index) => (
                            <FaqItem key={index} item={faq} />
                        ))}
                    </Accordion>
                </Center>
            )}
        </>
    )
}

export default FaqPage
