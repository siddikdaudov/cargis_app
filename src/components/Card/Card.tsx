import {FC, useState, useRef} from 'react'
import {View, StyleSheet, Platform, UIManager, LayoutAnimation, TouchableOpacity} from 'react-native'
import {APP_PADDING_HORIZONTAL} from '../../constants/constants'
import Arrow from '../../assets/icons/arrow.svg'
import {TOrders} from '../../constants/types'
import type {PropsWithChildren} from 'react'

type TProps = PropsWithChildren<{
	header: JSX.Element
	item?: TOrders
}>

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
	UIManager.setLayoutAnimationEnabledExperimental(true)
}

const Card: FC<TProps> = ({header, item, children}): JSX.Element => {
	const [expanded, setExpanded] = useState<boolean>(false)

	// исправление бага, когда при раскрытии одной карточки, это событие распространялось и на другие карточки
	if (item) {
		const {isExpanded, id} = item
		const lastItemId = useRef(id)
		if (id !== lastItemId.current) {
			lastItemId.current = id
			setExpanded(isExpanded)
		}
	}

	const handleExpand = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
		setExpanded((current) => !current)
	}

	return (
		<View style={styles.wrapper}>
			<TouchableOpacity style={{position: 'relative'}} onPress={handleExpand}>
				{header}
				<Arrow style={[styles.arrow, {transform: [{rotate: expanded ? '0deg' : '180deg'}]}]} />
			</TouchableOpacity>
			{expanded && children}
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		paddingVertical: 16,
		backgroundColor: 'white',
		borderRadius: 10,
		elevation: 1,
		marginHorizontal: APP_PADDING_HORIZONTAL,
		marginVertical: 8,
	},
	arrow: {
		position: 'absolute',
		right: 13,
		top: -2,
	},
})

export default Card
