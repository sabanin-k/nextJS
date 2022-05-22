import Link from 'next/link'
import { FC, ReactNode } from 'react'
import styles from './Navigation.module.scss'

export const Navigation: FC<Props> = ({ children }) => {
    return (
        <>
            <div className={styles.navigation}>
                <Link href='/'>
                    <a className={styles.link}>Home</a>
                </Link>
                <Link href='/users'>
                    <a className={styles.link}>Users</a>
                </Link>
                <Link href='/posts'>
                    <a className={styles.link}>Posts</a>
                </Link>
            </div>
            { children }
        </>
    )
}


type Props = {
    children: ReactNode
}