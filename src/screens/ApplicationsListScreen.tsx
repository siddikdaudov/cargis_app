import {View, ActivityIndicator, StyleSheet, Text} from 'react-native'
import {FlashList} from '@shopify/flash-list'
import Card from '../components/Card/Card'
import Filters from '../components/Filters'
import CardStatusHeader from '../components/Card/CardStatusHeader'
import CardListContent from '../components/Card/CardListContent'
import CardListFooter from '../components/Card/CardListFooter'
import useOrders from '../services/api/orders/useOrders'
import {COLORS} from '../constants/colors'

const ApplicationsListScreen = (): JSX.Element => {
	const {orders, error, size, setSize} = useOrders()

	if (error) {
		return (
			<View style={styles.initLoading}>
				<Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.black}}>{'Что-то пошло не так :('}</Text>
			</View>
		)
	}
	if (!orders)
		return (
			<View style={styles.initLoading}>
				<ActivityIndicator size={'large'} />
			</View>
		)

	const data = [
		...orders.map((orders) =>
			orders.orders.map((item: any) => ({
				id: item.id,
				status: item.status_1c,
				company: item.company.short_name,
				addressFrom: item.loading_address,
				addressTo: item.unloading_address,
				distance: item.distance_m,
				tariff: item.tariff_c,
				cargo: item.cargo_type,
				tonnage: item.tonnage_kg,
				viewsCount: item.views_count,
				created: item.create_dt,
				load: item.load_dt,
				ending: item.ending_dt,
				isExpanded: false,
			}))
		),
	]

	return (
		<>
			<Filters />
			<FlashList
				data={data.flat(Infinity)}
				renderItem={(props) => (
					<Card {...props} header={<CardStatusHeader data={props.item} showRange />}>
						<CardListContent data={props.item} />
						<CardListFooter data={props.item} />
					</Card>
				)}
				ListHeaderComponent={() => <View style={{height: 8}} />}
				ListFooterComponent={() => <View style={{height: 8}} />}
				onRefresh={() => setSize(0)}
				refreshing={false}
				estimatedItemSize={250}
				keyExtractor={(props: any) => props.id.toString()}
				onEndReached={() => setSize(size + 1)}
				onEndReachedThreshold={4}
			/>
		</>
	)
}

const styles = StyleSheet.create({
	initLoading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	loading: {
		height: 40,
		justifyContent: 'center',
	},
})

export default ApplicationsListScreen
