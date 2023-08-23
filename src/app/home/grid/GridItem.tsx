import AnimateBlock from '@/components/ui/animate-block/AnimateBlock'
import { FC } from 'react'
import { ITypeLinks } from '../../../assets/data/links/links.interface'

import styles from './/Grid.module.scss'

const GridItem: FC<{ item: ITypeLinks }> = ({ item }) => {
	return (
		<a
			href={item.link}
			rel='noreferrer'
			target={'_blank'}
			className={styles.item}
		>
			<div
				className={styles.main}
				style={{
					backgroundColor: item.background,
				}}
			>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={item.icon.path} alt={item.title} width={item.icon.width} />
			</div>
			<div className={styles.title}>{item.title}</div>
			{item.isImportant && <AnimateBlock />}
		</a>
	)
}

export default GridItem
