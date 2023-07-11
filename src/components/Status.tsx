import {FC} from 'react'
import {Text, StyleSheet, View} from 'react-native'
import {COLORS} from '../constants/colors'
import {TEXT_STYLES} from '../constants/textStyles'
import {STATUSES} from '../constants/constants'

type TProps = {
	text: string
}

const Status: FC<TProps> = ({text}): JSX.Element => {
	switch (text) {
		case STATUSES.active:
			return <Text style={[TEXT_STYLES.status, styles.active]}>Активная</Text>
		case STATUSES.completed:
			return <Text style={[TEXT_STYLES.status, styles.paused]}>На паузе</Text>
		case STATUSES.on_pause:
			return <Text style={[TEXT_STYLES.status, styles.completed]}>Завершена</Text>
		default:
			return <View />
	}
}

const styles = StyleSheet.create({
	active: {
		color: COLORS.mainBlue,
		paddingHorizontal: 8,
		paddingVertical: 1,
		backgroundColor: COLORS.activeStatusBG,
		borderRadius: 15,
	},
	paused: {
		color: COLORS.halfBlack,
		paddingHorizontal: 8,
		paddingVertical: 1,
		backgroundColor: COLORS.onPauseStatusBG,
		borderRadius: 15,
	},
	completed: {
		color: COLORS.completedStatus,
		paddingHorizontal: 8,
		paddingVertical: 1,
		backgroundColor: COLORS.completedStatusBG,
		borderRadius: 15,
	},
})

export default Status
