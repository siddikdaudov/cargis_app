import {View, ScrollView, ActivityIndicator, StyleSheet} from 'react-native'
import CalendarCard from '../components/InfoScreenCards/CalendarCard'
import ApplicationDetailsCard from '../components/InfoScreenCards/ApplicationDetailsCard'
import TransformDetailsCard from '../components/InfoScreenCards/TransformDetailsCard'
import LoadCard from '../components/InfoScreenCards/LoadCard'
import UnloadCard from '../components/InfoScreenCards/UnloadCard'
import Button from '../components/Button'
import {ApplicationsListScreenProps} from '../navigation/types'
import {useRoute} from '@react-navigation/native'
import useOrder from '../services/api/orders/useOrder'

const InfoScreen = (): JSX.Element => {
	const route = useRoute<ApplicationsListScreenProps<'ApplicationStack'>['route']>()
	const id = route.params.params?.data.id

	if (!id)
		return (
			<View style={styles.loading}>
				<ActivityIndicator size={'large'} />
			</View>
		)

	const {data, isLoading, error} = useOrder(id)

	if (isLoading || error)
		return (
			<View style={styles.loading}>
				<ActivityIndicator size={'large'} />
			</View>
		)

	return (
		<View style={styles.wrapper}>
			<View style={{flex: 1}}>
				<ScrollView contentContainerStyle={{paddingVertical: 8}}>
					<CalendarCard title='Календарь суточной загрузки' />
					<ApplicationDetailsCard title='Детали заявки' data={data} />
					<TransformDetailsCard title='Детали перевозки' data={data} />
					<LoadCard title='Погрузка' data={data} />
					<UnloadCard title='Выгрузка' data={data} />
				</ScrollView>
			</View>
			<View style={styles.bottomBtnWrapper}>
				<Button text='Отправить отклик' isFill />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	bottomBtnWrapper: {
		flex: 0.06,
		backgroundColor: 'white',
		paddingHorizontal: 24,
		paddingVertical: 16,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
	},
	loading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default InfoScreen
