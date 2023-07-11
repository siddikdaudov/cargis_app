import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {useRoute, useNavigation} from '@react-navigation/native'
import CardStatusHeader from '../components/Card/CardStatusHeader'
import InfoScreen from '../screens/InfoScreen'
import TransportationsScreen from '../screens/TransportationsScreen'
import {ApplicationsListScreenProps} from './types'
import GoBack from '../assets/icons/back.svg'
import {APP_PADDING_HORIZONTAL, HEADER_HEIGHT} from '../constants/constants'
import {COLORS} from '../constants/colors'

const Tab = createMaterialTopTabNavigator()

const ApplicationStack = (): JSX.Element => {
	const route = useRoute<ApplicationsListScreenProps<'ApplicationStack'>['route']>()
	const navigation = useNavigation<ApplicationsListScreenProps<'ApplicationStack'>['navigation']>()

	return (
		<>
			{route.params.params?.data && (
				<View style={styles.flex}>
					<TouchableOpacity onPress={navigation.goBack}>
						<GoBack />
					</TouchableOpacity>
					<CardStatusHeader data={route.params.params.data} showRange={false} />
				</View>
			)}
			<Tab.Navigator
				initialRouteName='InfoScreen'
				screenOptions={{
					tabBarActiveTintColor: COLORS.mainBlue,
					tabBarInactiveTintColor: COLORS.halfBlack,
					tabBarIndicatorStyle: {backgroundColor: COLORS.mainBlue},
				}}
			>
				<Tab.Screen name='InfoScreen' component={InfoScreen} options={{title: 'Информация'}} initialParams={route.params} />
				<Tab.Screen
					name='TransportationsScreen'
					component={TransportationsScreen}
					options={{
						title: 'Мои перевозки',
						tabBarBadge: () => (
							<View style={styles.counter}>
								<Text style={{color: 'white', fontWeight: '700'}}>0</Text>
							</View>
						),
					}}
				/>
			</Tab.Navigator>
		</>
	)
}

const styles = StyleSheet.create({
	flex: {
		height: HEADER_HEIGHT,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: APP_PADDING_HORIZONTAL,
		backgroundColor: 'white',
		borderBottomWidth: 1,
		borderBottomColor: COLORS.headerBorderBottom,
	},
	counter: {
		backgroundColor: COLORS.blueGray,
		borderRadius: 10,
		paddingHorizontal: 7,
		marginRight: 16,
		marginVertical: 15,
	},
})
export default ApplicationStack
