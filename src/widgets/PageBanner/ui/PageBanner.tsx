import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import { BreadcrumbsItem, MyBreadcrumbs } from 'shared/ui/MyBreadcrumbs/MyBreadcrumbs'
import { Title, Text, Image, Box } from '@mantine/core'
import { useStyles } from './PageBanner.styles'

interface PageBannerProps {
	title: string
	text: string
	subText?: string
	breadcrumbs?: BreadcrumbsItem[]
	Filter?: ReactNode
}

export const PageBanner: FC<PageBannerProps> = (props) => {
	const { text, title, subText, breadcrumbs, Filter } = props

	const { classes } = useStyles()

	return (
		<div className={classNames(classes.pageBanner, {})}>
			<div className={classes.pageInfo}>
				{breadcrumbs && (
					<Box mb="xl">
						<MyBreadcrumbs data={breadcrumbs} />
					</Box>
				)}
				<Title order={1} mb="xl" className={classes.title}>
					{title}
				</Title>
				<Text c="dimmed" mb="xl">
					{text}
				</Text>
				{subText && (
					<Text c="dimmed" mb="xl">
						{subText}
					</Text>
				)}
				{Filter}
			</div>
			<div className={classes.pageImg}>
				<Image
					width={'auto'}
					src="assets/images/img_back.png"
					alt="BackImage"
					className={classes.imgBack}
				/>
			</div>
		</div>
	)
}
