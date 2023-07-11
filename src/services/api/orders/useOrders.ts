import axios from '../../axios'
import useSWRInfinite, {SWRInfiniteKeyLoader} from 'swr/infinite'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const getKey: SWRInfiniteKeyLoader = (index, previousPageData) => {
	if (!!previousPageData && index > previousPageData.total_page) return null // достигнут конец
	return `/v2/order/list?page=${index}&status_1c[0]=active&status_1c[1]=on_pause&status_1c[3]=completed&order_1c_search_is_true=true`
}

const useOrders = () => {
	const {data, error, size, setSize, isLoading, isValidating} = useSWRInfinite(getKey, fetcher)

	return {
		orders: data,
		isLoading,
		error,
		size,
		setSize,
		isValidating,
	}
}

export default useOrders
