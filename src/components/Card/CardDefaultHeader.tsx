import {FC} from 'react'
import {Text, View} from 'react-native'
import {TEXT_STYLES} from '../../constants/textStyles'
import {APP_PADDING_HORIZONTAL} from '../../constants/constants'

type TProps = {
	title: string
}

const CardDefaultHeader: FC<TProps> = ({title}): JSX.Element => {
	return (
		<View style={{paddingHorizontal: APP_PADDING_HORIZONTAL}}>
			<Text style={TEXT_STYLES.cardTitle}>{title}</Text>
		</View>
	)
}

export default CardDefaultHeader
