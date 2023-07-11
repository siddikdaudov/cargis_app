import {FC} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {TEXT_STYLES} from '../constants/textStyles'
import From from '../assets/icons/routFrom.svg'
import To from '../assets/icons/routeTo.svg'

type TProps = {
	address: string
	isFrom: boolean
}

const Route: FC<TProps> = ({address, isFrom}): JSX.Element => {
	return (
		<View style={styles.wrapper}>
			{isFrom ? <From /> : <To />}
			<View style={{flex: 1}}>
				<Text style={TEXT_STYLES.company}>{address}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
})

export default Route
