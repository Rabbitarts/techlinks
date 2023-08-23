import { API_URL } from '@/config/constant'
import axios from 'axios'
import Home from './home/Home'

export const revalidate = 60

async function getData() {
	const links = await axios.get(`${API_URL}/links`).then(({ data }) => data)
	const me = await axios.get(`${API_URL}/me`).then(({ data }) => data)

	return { links, me }
}

export default async function HomePage() {
	const data = await getData()

	return <Home links={data.links} me={data.me} />
}
