import {FC} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Card from '../Card/Card'
import CardDefaultHeader from '../Card/CardDefaultHeader'
import InfoBlock from '../InfoBlock'
import {APP_PADDING_HORIZONTAL} from '../../constants/constants'
import Moreinfo from '../MoreInfo'
import Route from '../Route'
import {TEXT_STYLES} from '../../constants/textStyles'
import {COLORS} from '../../constants/colors'
import formatNumbers from '../../utils/formatNumbers'
import {months} from '../../constants/constants'

type TProps = {
	title: string
	data: any
}

const TransformDetailsCard: FC<TProps> = ({title, data}): JSX.Element => {
	const distance = Math.floor(data.distance_m / 1000)
	const tonnage = Math.floor(data.tonnage_kg / 1000)

	return (
		<Card header={<CardDefaultHeader title={title} />}>
			<View style={{paddingHorizontal: APP_PADDING_HORIZONTAL}}>
				<InfoBlock title='Маршрут' style={{marginTop: 16, marginBottom: 8}}>
					<Route address={data.loading_address} isFrom />
					<Route address={data.unloading_address} isFrom={false} />
				</InfoBlock>
				<InfoBlock title='Сроки перевозки' style={{marginBottom: 8}}>
					{data.load_dt && data.ending_dt ? (
						<Text style={TEXT_STYLES.company}>
							{data.load_dt?.substring(5, 6) == 0
								? `c ${data.load_dt?.substring(6, 7)} ${months[data.load_dt?.substring(6, 7) - 1]} ${data.load_dt?.substring(0, 4)}`
								: `с ${data.load_dt?.substring(5, 7)} ${months[data.load_dt?.substring(5, 7) - 1]} ${data.load_dt?.substring(0, 4)}`}{' '}
							{data.ending_dt?.substring(5, 6) == 0
								? `по ${data.ending_dt?.substring(6, 7)} ${months[data.ending_dt?.substring(6, 7) - 1]} ${data.load_dt?.substring(0, 4)}`
								: `по ${data.ending_dt?.substring(5, 7)} ${months[data.ending_dt?.substring(5, 7) - 1]} ${data.load_dt?.substring(0, 4)}`}
						</Text>
					) : null}
				</InfoBlock>
				<View style={[styles.flex, {marginBottom: 8}]}>
					<InfoBlock title='Расстояние' style={{flex: 1}}>
						<Text style={TEXT_STYLES.company}>{formatNumbers(distance)} км</Text>
					</InfoBlock>
					<InfoBlock title='Тариф' style={{flex: 1}}>
						<Text style={TEXT_STYLES.company}>
							{formatNumbers(data.tariff_c)} ₽/т {''}
							<Text style={{color: COLORS.blueGray, fontWeight: '400'}}>{data.tariff?.description}</Text>
						</Text>
					</InfoBlock>
				</View>
				<View style={styles.flex}>
					<InfoBlock title='Груз' style={{flex: 1}}>
						<Text style={TEXT_STYLES.company}>{data.cargo_type}</Text>
					</InfoBlock>
					<InfoBlock title='Всего к перевозке' style={{flex: 1}}>
						<Text style={TEXT_STYLES.company}>
							{formatNumbers(tonnage)} т <Text style={{color: COLORS.blueGray, fontWeight: '400'}}>/ из {formatNumbers(tonnage)} т</Text>
						</Text>
					</InfoBlock>
				</View>
				<InfoBlock title='Комментарий' style={{marginBottom: 16, marginTop: 8}}>
					<Text style={TEXT_STYLES.company}>{data.additional_info}</Text>
				</InfoBlock>
				<Moreinfo text='Все детали' />
			</View>
		</Card>
	)
}

const styles = StyleSheet.create({
	flex: {
		flexDirection: 'row',
		gap: 8,
		justifyContent: 'space-between',
	},
})

export default TransformDetailsCard
