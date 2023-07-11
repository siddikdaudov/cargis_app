import useSWR from 'swr'
import axios from '../../axios'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

function useOrder(id: number) {
	const {data, error, isLoading} = useSWR(`/v1/orders/${id}`, fetcher)

	return {
		data,
		isLoading,
		error,
	}
}

export default useOrder
