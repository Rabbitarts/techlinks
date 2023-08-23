import { useOutside } from '@/hooks/useOutside'
import { FC } from 'react'

import parse from 'html-react-parser'
import styles from './DescriptionButton.module.scss'

import cn from 'clsx'

const DescriptionButton: FC<{ description: string }> = ({ description }) => {
	const { isShow, ref, setIsShow } = useOutside(false)

	return (
		<div ref={ref} className={styles.wrapper}>
			<button
				onClick={() => setIsShow(!isShow)}
				className={cn({
					'bg-black': isShow,
				})}
			>
				<span>About Me</span>
			</button>
			{isShow && <article>{parse(description)}</article>}
		</div>
	)
}

export default DescriptionButton
