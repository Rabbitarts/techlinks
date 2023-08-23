import { ITypeMe } from '@/app/api/me/route'
import Image from 'next/image'
import { FC } from 'react'
import DescriptionButton from './desc-button/DescriptionButton'
import EmailButton from './email-button/EmailButton'

import styles from './AboutMe.module.scss'

const AboutMe: FC<{ me: ITypeMe }> = ({ me }) => {
	return (
		<div className={styles.me}>
			<div className={styles.imageWrapper}>
				<span>
					<Image
						src={me.avatar}
						width={190}
						height={190}
						className='rounded-full'
						alt={me.siteName}
						quality={100}
						priority
					/>
				</span>
			</div>
			<div className={styles.heading}>
				<span>Tech Artem</span>
				<Image src='/icons/verified.svg' alt='' height={18} width={18} />
			</div>
			<EmailButton />
			<DescriptionButton description={me.description} />
		</div>
	)
}

export default AboutMe
