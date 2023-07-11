import {FC} from 'react'
import {Text, Pressable, StyleSheet} from 'react-native'
import {COLORS} from '../constants/colors'

type TProps = {
	text: string
	isActive: boolean
}

const Filter: FC<TProps> = ({text, isActive}): JSX.Element => {
	return (
		<Pressable style={[styles.filter, isActive ? styles.active : null]}>
			<Text style={isActive ? styles.activeText : styles.defaultText}>
				{text}
			</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	filter: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderRadius: 70,
		borderColor: COLORS.middleGray,
		borderWidth: 1,
	},
	active: {
		borderColor: COLORS.mainBlue,
	},
	defaultText: {
		color: COLORS.halfBlack,
	},
	activeText: {
		color: COLORS.mainBlue,
	},
})

export default Filter
