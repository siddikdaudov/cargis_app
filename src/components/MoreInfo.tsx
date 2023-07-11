import {FC} from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import Arrow from '../assets/icons/blueArrow.svg'
import {TEXT_STYLES} from '../constants/textStyles'
import {COLORS} from '../constants/colors'

type TProps = {
	text: string
}

const Moreinfo: FC<TProps> = ({text}): JSX.Element => {
	return (
		<TouchableOpacity style={styles.wrapper}>
			<Text style={[TEXT_STYLES.company, {color: COLORS.mainBlue}]}>{text}</Text>
			<Arrow style={{transform: [{rotate: '180deg'}]}} />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		paddingLeft: 5,
	},
})

export default Moreinfo
