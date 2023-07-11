import {FC} from 'react'
import {View, StyleSheet} from 'react-native'
import Button from '../Button'
import {APP_PADDING_HORIZONTAL} from '../../constants/constants'
import {useNavigation} from '@react-navigation/native'
import type {ApplicationsListScreenProps} from '../../navigation/types'
import {TOrders} from '../../constants/types'

type TProps = {
	data: TOrders
}

const CardListFooter: FC<TProps> = ({data}): JSX.Element => {
	const navigation = useNavigation<ApplicationsListScreenProps<'ApplicationStack'>['navigation']>()
	const onPressMore = () => {
		navigation.navigate('ApplicationStack', {screen: 'ApplicationList', params: {data}})
	}

	return (
		<View style={styles.flex}>
			<Button text='Подробнее' isFill={false} onPress={onPressMore} />
			<Button text='Оставить отклик' isFill />
		</View>
	)
}

const styles = StyleSheet.create({
	flex: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		paddingHorizontal: APP_PADDING_HORIZONTAL,
	},
})

export default CardListFooter
