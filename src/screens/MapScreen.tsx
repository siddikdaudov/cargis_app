import {Text, View} from 'react-native'
import {COLORS} from '../constants/colors'

const MapScreen = (): JSX.Element => {
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.black}}>Тут пока пусто</Text>
		</View>
	)
}

export default MapScreen
