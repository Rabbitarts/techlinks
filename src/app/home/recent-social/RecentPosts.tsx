import { FC } from 'react'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { LatestPost } from './data'
import PostItem from './PostItem'

import styles from './RecentPosts.module.scss'

const RecentPosts: FC = () => {
	const { data, isLoading } = useQuery(
		['get recent video'],
		() => axios.get('/api/social'),
		{
			select: ({ data }) => data,
		}
	)

	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>
				Latest posts <span>👉</span>
			</div>
			{isLoading
				? 'Loading...'
				: LatestPost
				? LatestPost.map(post => <PostItem key={post.id} item={post} />)
				: 'Data not found!'}
		</div>
	)
}

export default RecentPosts
