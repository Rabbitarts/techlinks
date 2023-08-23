import { FC } from 'react'
import { IRecentPosts } from './recent-video.interface'

import styles from './RecentPosts.module.scss'

const PostItem: FC<{ item: IRecentPosts }> = ({ item }) => {
	return (
		<a
			href={`https://dev.to/${item.author}/${item.id}`}
			target={'_blank'}
			rel='noreferrer'
			className={styles.item}
		>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img src={item.thumbnail} alt={item.title} width={70} />
			<span className='truncate'>{item.title}</span>
		</a>
	)
}

export default PostItem
