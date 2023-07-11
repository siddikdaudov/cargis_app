import React, {FC} from 'react'
import Card from '../Card/Card'
import CardDefaultHeader from '../Card/CardDefaultHeader'

type TProps = {
	title: string
}

const CalendarCard: FC<TProps> = ({title}): JSX.Element => {
	return <Card header={<CardDefaultHeader title={title} />}></Card>
}

export default CalendarCard
