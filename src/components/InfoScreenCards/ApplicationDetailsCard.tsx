import {FC} from 'react'
import {View} from 'react-native'
import Card from '../Card/Card'
import CardDefaultHeader from '../Card/CardDefaultHeader'
import InfoBlock from '../InfoBlock'
import Company from '../Company'
import {APP_PADDING_HORIZONTAL} from '../../constants/constants'
import Moreinfo from '../MoreInfo'

type TProps = {
	title: string
	data: any
}

const ApplicationDetailsCard: FC<TProps> = ({title, data}): JSX.Element => {
	return (
		<Card header={<CardDefaultHeader title={title} />}>
			<View style={{paddingHorizontal: APP_PADDING_HORIZONTAL}}>
				<InfoBlock title='Заказчик' style={{marginVertical: 16}}>
					<Company company='ООО «Доставка Грузов по России»' />
				</InfoBlock>
				<Moreinfo text='Показать контакты' />
			</View>
		</Card>
	)
}

export default ApplicationDetailsCard
