import {FC} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {TEXT_STYLES} from '../constants/textStyles'
import Check from '../assets/icons/checkmark.svg'
import Shield from '../assets/icons/shield.svg'

type TProps = {
	company: string
}

const Company: FC<TProps> = ({company}): JSX.Element => {
	return (
		<View style={styles.wrapper}>
			<View style={{flex: 1}}>
				<Text style={TEXT_STYLES.company}>{company}</Text>
			</View>
			<Check />
			<Shield />
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},
})

export default Company
