import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import MapScreen from '../screens/MapScreen'
import ApplicationsListScreen from '../screens/ApplicationsListScreen'
import {COLORS} from '../constants/colors'

const Tab = createMaterialTopTabNavigator()

const ApplicationsListStack = (): JSX.Element => {
	return (
		<Tab.Navigator
			initialRouteName='ApplicationsListScreen'
			screenOptions={{
				tabBarActiveTintColor: COLORS.mainBlue,
				tabBarInactiveTintColor: COLORS.halfBlack,
				tabBarIndicatorStyle: {backgroundColor: COLORS.mainBlue},
			}}
		>
			<Tab.Screen name='MapScreen' component={MapScreen} options={{title: 'Карта'}} />
			<Tab.Screen name='ApplicationsListScreen' component={ApplicationsListScreen} options={{title: 'Список'}} />
		</Tab.Navigator>
	)
}

export default ApplicationsListStack
