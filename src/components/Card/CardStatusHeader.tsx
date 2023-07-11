import React, {FC} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {TEXT_STYLES} from '../../constants/textStyles'
import Status from '../Status'
import ViewsCount from '../ViewsCount'
import {APP_PADDING_HORIZONTAL} from '../../constants/constants'
import {TOrders} from '../../constants/types'

type TProps = {
	data: TOrders
	showRange: boolean
}

const CardStatusHeader: FC<TProps> = ({data, showRange}): JSX.Element => {
	return (
		<View style={{paddingHorizontal: APP_PADDING_HORIZONTAL}}>
			<View style={styles.wrapper}>
				<Text style={TEXT_STYLES.cardTitle}>Заявка №{data.id}</Text>
				<Status text={data.status} />
			</View>
			<ViewsCount
				created={data.created}
				load={data.load}
				ending={data.ending}
				viewsCount={data.viewsCount}
				showRange={showRange}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		gap: 8,
		alignItems: 'center',
		marginBottom: 8,
	},
})

export default CardStatusHeader
