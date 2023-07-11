import type {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import type {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs'
import {TOrders} from '../constants/types'

export type MainStackParamList = {
	ApplicationsListStack: NavigatorScreenParams<ApplicationsListParam>
	ApplicationStack: NavigatorScreenParams<ApplicationParam>
}

export type MainStackScreenProps<T extends keyof MainStackParamList> = NativeStackScreenProps<MainStackParamList, T>

export type ApplicationsListParam = {
	ApplicationsListScreen: undefined
	MapScreen: undefined
}

export type ApplicationParam = {
	ApplicationList: {data: TOrders}
	TransportationsScreen: undefined
}

export type ApplicationsListScreenProps<T extends keyof MainStackParamList> = CompositeScreenProps<
	MaterialTopTabScreenProps<MainStackParamList, T>,
	MainStackScreenProps<keyof MainStackParamList>
>

declare global {
	namespace ReactNavigation {
		interface RootParamList extends MainStackParamList {}
	}
}