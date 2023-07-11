import {FC} from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {TEXT_STYLES} from '../constants/textStyles'
import {COLORS} from '../constants/colors'

type TProps = {
	text: string
	isFill: boolean
	onPress?: () => void
}

const Button: FC<TProps> = ({text, isFill, onPress}): JSX.Element => {
	return (
		<TouchableOpacity
			style={[styles.button, isFill ? styles.fill : styles.border]}
			onPress={onPress}
		>
			<Text
				style={[
					TEXT_STYLES.button,
					{color: isFill ? 'white' : COLORS.mainBlue},
				]}
			>
				{text}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		padding: 8,
		borderRadius: 50,
		flex: 1,
	},
	border: {
		borderWidth: 1,
		borderColor: COLORS.middleGray,
		color: COLORS.mainBlue,
		backgroundColor: 'white',
	},
	fill: {
		backgroundColor: COLORS.mainBlue,
	},
})

export default Button
