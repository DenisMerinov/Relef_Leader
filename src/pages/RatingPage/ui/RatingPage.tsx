import { BreadcrumbsItem } from 'shared/ui/MyBreadcrumbs/MyBreadcrumbs'
import { PageBanner } from 'widgets/PageBanner'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { RatingTable } from 'entities/Rating'

const breadcrumbs: BreadcrumbsItem[] = [
	{
		href: RoutePath.activity_list,
		title: 'Главная',
		inactive: true,
	},
	{
		href: RoutePath.rating,
		title: 'Рейтинг сотрудников',
	},
]
const RatingPage = () => {
	return (
		<>
			<PageBanner
				breadcrumbs={breadcrumbs}
				text={
					// eslint-disable-next-line max-len
					'Все результаты участия в Программе развития руководителей записываются и формируют общий рейтинг всех руководителей. Проходите онлайн-курсы, посещайте тренинги и становитесь лидером рейтинга по всей компании!'
				}
				title="Рейтинг сотрудников"
				// eslint-disable-next-line max-len
				subText='Самые активные участники и лидеры рейтинга будут отмечены руководством "Рельеф-Центра" в конце 2023 года'
			/>
			<RatingTable />
		</>
	)
}

export default RatingPage
