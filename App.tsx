import {StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import MainStack from './src/navigation/MainStack'
import {SWRConfig} from 'swr'

const MyApp = (): JSX.Element => {
	return (
		<>
			<StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
			<NavigationContainer>
				<MainStack />
			</NavigationContainer>
		</>
	)
}

const App = (): JSX.Element => {
	return (
		<SWRConfig
			value={{
				provider: () => new Map(),
			}}
		>
			<MyApp />
		</SWRConfig>
	)
}

export default App
