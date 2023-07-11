import {FC} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Card from '../Card/Card'
import CardDefaultHeader from '../Card/CardDefaultHeader'
import InfoBlock from '../InfoBlock'
import {APP_PADDING_HORIZONTAL} from '../../constants/constants'
import Company from '../Company'
import {TEXT_STYLES} from '../../constants/textStyles'
import {COLORS} from '../../constants/colors'
import Phone from '../../assets/icons/phone.svg'
import formatPhoneNumber from '../../utils/formatPhonNumber'

type TProps = {
	title: string
	data: any
}

const UnloadCard: FC<TProps> = ({title, data}): JSX.Element => {
	return (
		<Card header={<CardDefaultHeader title={title} />}>
			<View style={{paddingHorizontal: APP_PADDING_HORIZONTAL}}>
				<InfoBlock title='Грузополучатель' style={{marginTop: 16, marginBottom: 8}}>
					<Company company={data.consignee} />
					<Text style={TEXT_STYLES.infoBlockTitle}>ИНН: {data.consignee_inn}</Text>
				</InfoBlock>
				<InfoBlock title='Ответственный представитель' style={{marginBottom: 8}}>
					<View style={styles.flex}>
						<View>
							<Text style={TEXT_STYLES.company}>{data.consignee_contact}</Text>
							<Text style={[TEXT_STYLES.company, {color: COLORS.mainBlue}]}>{formatPhoneNumber(data.consignee_contact_phone)}</Text>
						</View>
						<Phone />
					</View>
				</InfoBlock>
			</View>
		</Card>
	)
}

const styles = StyleSheet.create({
	flex: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
})

export default UnloadCard
