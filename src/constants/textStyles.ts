import {StyleProp, TextStyle} from 'react-native'
import {COLORS} from './colors'

type TtextStyles = {
	header: StyleProp<TextStyle>
	cardTitle: StyleProp<TextStyle>
	status: StyleProp<TextStyle>
	viewsCount: StyleProp<TextStyle>
	infoBlockTitle: StyleProp<TextStyle>
	company: StyleProp<TextStyle>
	button: StyleProp<TextStyle>
}

export const TEXT_STYLES: TtextStyles = {
	header: {
		fontSize: 20,
		fontWeight: '600',
		lineHeight: 24,
		color: COLORS.black,
	},
	cardTitle: {
		fontSize: 16,
		fontWeight: '600',
		lineHeight: 24,
		color: COLORS.black,
	},
	status: {
		fontSize: 11,
		fontWeight: '500',
		lineHeight: 16,
	},
	viewsCount: {
		fontSize: 11,
		fontWeight: '400',
		lineHeight: 16,
		letterSpacing: 0.02,
		color: COLORS.halfBlack,
	},
	infoBlockTitle: {
		fontSize: 9,
		fontWeight: '500',
		lineHeight: 16,
		letterSpacing: 0.3,
		textTransform: 'uppercase',
		color: COLORS.halfBlack,
	},
	company: {
		fontSize: 13,
		fontWeight: '500',
		lineHeight: 24,
		color: COLORS.black,
	},
	button: {
		textAlign: 'center',
		fontSize: 14,
		fontWeight: '600',
		lineHeight: 24,
	},
}
