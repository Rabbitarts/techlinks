import { ITypeLinks } from '@/assets/data/links/links.interface'
import { FC } from 'react'

import styles from './Grid.module.scss'
import GridItem from './GridItem'

const Grid: FC<{ links: ITypeLinks[] }> = ({ links }) => {
	return (
		<div className={styles.grid}>
			{links.length ? (
				links.map(link => <GridItem key={link.id} item={link} />)
			) : (
				<div>No enough data</div>
			)}
		</div>
	)
}

export default Grid
