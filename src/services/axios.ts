import axios from 'axios'
import {API_URL} from '../constants/constants'

const instance = axios.create({
	baseURL: API_URL,
})

instance.defaults.headers.common = {
	'Content-Type': 'application/json',
	Authorization: `Bearer dZhzHlw8Flpsf8W9Duq4rsJ1UVT4dRlW`,
}

export default instance
