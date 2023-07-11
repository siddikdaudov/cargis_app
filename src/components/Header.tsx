import React, {FC} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {TEXT_STYLES} from '../constants/textStyles'
import {APP_PADDING_HORIZONTAL, HEADER_HEIGHT} from '../constants/constants'
import {COLORS} from '../constants/colors'

type TProps = {
	title: string
}

const Header: FC<TProps> = ({title}): JSX.Element => {
	return (
		<View style={styles.header}>
			<Text style={[TEXT_STYLES.header, {paddingHorizontal: APP_PADDING_HORIZONTAL}]}>{title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		height: HEADER_HEIGHT,
		position: 'relative',
		backgroundColor: 'white',
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderBottomColor: COLORS.headerBorderBottom,
	},
})

export default Header
