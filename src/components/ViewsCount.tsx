import React, {FC} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {TEXT_STYLES} from '../constants/textStyles'
import Timer from '../assets/icons/timer.svg'
import Eye from '../assets/icons/eye.svg'

type TProps = {
	created: string
	load?: string
	ending?: string
	viewsCount: number | string
	showRange: boolean
}

const ViewsCount: FC<TProps> = ({created, load, ending, viewsCount, showRange}): JSX.Element => {
	return (
		<View style={[styles.row, {gap: 10}]}>
			<View>
				<Text style={TEXT_STYLES.viewsCount}>От {created?.substring(0, 10)}</Text>
			</View>
			{showRange && (
				<View style={[styles.row, {gap: 2}]}>
					<Timer />
					<Text style={TEXT_STYLES.viewsCount}>
						{load} - {ending}
					</Text>
				</View>
			)}
			<View style={[styles.row, {gap: 2}]}>
				<Eye />
				<Text style={TEXT_STYLES.viewsCount}>Просмотры: {viewsCount}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
})

export default ViewsCount
