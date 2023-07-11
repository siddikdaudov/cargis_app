import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ApplicationStack from './ApplicationStack'
import ApplicationsListStack from './ApplicationsListStack'
import Header from '../components/Header'
import {getHeaderTitle} from '@react-navigation/elements'

const Stack = createNativeStackNavigator()

const MainStack = (): JSX.Element => {
	return (
		<Stack.Navigator
			screenOptions={{
				header: ({route, options}) => {
					const title = getHeaderTitle(options, route.name)
					return <Header title={title} />
				},
				animation: 'slide_from_right',
			}}
		>
			<Stack.Screen
				name='ApplicationsListStack'
				component={ApplicationsListStack}
				options={{
					title: 'Заявки на перевозки',
				}}
			/>
			<Stack.Screen name='ApplicationStack' component={ApplicationStack} options={{headerShown: false}} />
		</Stack.Navigator>
	)
}

export default MainStack
