import {FC} from 'react'
import {View, StyleSheet, Text, StyleProp, ViewStyle} from 'react-native'
import {TEXT_STYLES} from '../constants/textStyles'
import {COLORS} from '../constants/colors'
import type {PropsWithChildren} from 'react'

type TProps = PropsWithChildren<{
	title: string
	style?: StyleProp<ViewStyle>
}>

const InfoBlock: FC<TProps> = ({children, title, style}): JSX.Element => {
	return (
		<View style={[styles.wrapper, style]}>
			<Text style={TEXT_STYLES.infoBlockTitle}>{title}</Text>
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		borderRadius: 5,
		paddingVertical: 8,
		paddingHorizontal: 14,
		backgroundColor: COLORS.lightGray,
	},
})

export default InfoBlock
