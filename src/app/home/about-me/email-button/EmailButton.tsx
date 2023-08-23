import Image from 'next/image'
import { FC } from 'react'

import styles from './EmailButton.module.scss'

const EmailButton: FC = () => {
	return (
		<div className={styles.button}>
			<a
				href='mailto:artemchumachenko2607@gmail.com'
				target='_black'
				rel='noreferrer'
				title='artemchumachenko2607@gmail.com'
			>
				<span>
					<Image
						src='/icons/email.svg'
						alt='email'
						height={22}
						width={22}
					/>
				</span>
				<span>Email</span>
			</a>
		</div>
	)
}

export default EmailButton
