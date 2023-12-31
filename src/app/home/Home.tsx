'use client'

import Circles from '@/components/ui/circles/Circles'
import { FC } from 'react'
import { ITypeLinks } from '../../assets/data/links/links.interface'
import AboutMe from './about-me/AboutMe'
import Grid from './grid/Grid'
import RecentPosts from './recent-social/RecentPosts'

import { ITypeMe } from '@/assets/data/me'
import styles from './Home.module.scss'

interface IHome {
	links: ITypeLinks[]
	me: ITypeMe
}

const Home: FC<IHome> = ({ links, me }) => {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<AboutMe me={me} />
				<RecentPosts />
				<Grid links={links} />
			</div>
			<Circles />
		</main>
	)
}

export default Home
