import {ScrollView, StyleSheet, View} from 'react-native'
import Filter from './Filter'
import {STATUSES, APP_PADDING_HORIZONTAL} from '../constants/constants'

type TFilter = {text: string; status: string}

const filters: Array<TFilter> = [
	{text: 'Все', status: 'all'},
	{text: 'Активные', status: STATUSES.active},
	{text: 'На паузе', status: STATUSES.on_pause},
	{text: 'Завершенные', status: STATUSES.completed},
]

const Filters = (): JSX.Element => {
	return (
		<View>
			<ScrollView
				style={styles.container}
				horizontal
				showsHorizontalScrollIndicator={false}
			>
				<View style={styles.wrapper}>
					{filters.map((item, index) => (
						<Filter text={item.text} isActive={index === 0} key={index} />
					))}
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 16,
		backgroundColor: 'white',
	},
	wrapper: {
		flexDirection: 'row',
		gap: 8,
		paddingHorizontal: APP_PADDING_HORIZONTAL,
	},
})

export default Filters
