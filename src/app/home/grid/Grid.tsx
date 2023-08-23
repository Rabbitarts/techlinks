import { ITypeLinks } from '../../api/links/links.interface'
import { FC } from 'react'

import styles from './Grid.module.scss'
import GridItem from './GridItem'

const Grid: FC<{ links: ITypeLinks[] }> = ({ links }) => {
	return (
		<div className={styles.grid}>
			{links.map(link => (
				<GridItem key={link.id} item={link} />
			))}
		</div>
	)
}

export default Grid
