import {FC} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {TEXT_STYLES} from '../../constants/textStyles'
import InfoBlock from '../InfoBlock'
import Company from '../Company'
import Route from '../Route'
import {COLORS} from '../../constants/colors'
import {APP_PADDING_HORIZONTAL} from '../../constants/constants'
import {TOrders} from '../../constants/types'
import formatNumbers from '../../utils/formatNumbers'

type TProps = {
	data: TOrders
}

const CardListContent: FC<TProps> = ({data}): JSX.Element => {
	const distance = Math.floor(data.distance / 1000)
	const tonnage = Math.floor(data.tonnage / 1000)
	return (
		<View style={styles.wrapper}>
			<View style={styles.borderTop} />
			<View style={{paddingHorizontal: APP_PADDING_HORIZONTAL}}>
				<InfoBlock title='Заказчик' style={{marginBottom: 8}}>
					<Company company={data.company} />
				</InfoBlock>
				<InfoBlock title='Маршрут перевозки' style={{marginBottom: 8}}>
					<Route address={data.addressFrom} isFrom />
					<Route address={data.addressTo} isFrom={false} />
				</InfoBlock>
				<View style={[styles.flex, {marginBottom: 8}]}>
					<InfoBlock title='Расстояние' style={{flex: 1}}>
						<Text style={TEXT_STYLES.company}>{formatNumbers(distance)} км</Text>
					</InfoBlock>
					<InfoBlock title='Тариф' style={{flex: 1}}>
						<Text style={TEXT_STYLES.company}>
							{formatNumbers(data.tariff)} ₽/т {''}
							<Text style={{color: COLORS.blueGray, fontWeight: '400'}}>Без НДС</Text>
						</Text>
					</InfoBlock>
				</View>
				<View style={styles.flex}>
					<InfoBlock title='Груз' style={{flex: 1}}>
						<Text style={TEXT_STYLES.company}>{data.cargo}</Text>
					</InfoBlock>
					<InfoBlock title='Всего к перевозке' style={{flex: 1}}>
						<Text style={TEXT_STYLES.company}>
							{formatNumbers(tonnage)} т <Text style={{color: COLORS.blueGray, fontWeight: '400'}}>/ из {formatNumbers(tonnage)} т</Text>
						</Text>
					</InfoBlock>
				</View>
			</View>
			<View style={styles.borderBottom} />
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		marginVertical: 32,
		position: 'relative',
	},
	borderTop: {
		position: 'absolute',
		height: 1,
		backgroundColor: COLORS.lightGray,
		top: -16,
		width: '100%',
	},
	borderBottom: {
		position: 'absolute',
		height: 1,
		backgroundColor: COLORS.lightGray,
		bottom: -16,
		width: '100%',
	},
	flex: {
		flexDirection: 'row',
		gap: 8,
		justifyContent: 'space-between',
	},
})

export default CardListContent
