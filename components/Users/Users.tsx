import { FC, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { TUser } from "../../types"
import styles from "./Users.module.scss"
import { selectTitle, setTitle } from "../../store/reducers/app"

export const Users: FC<Props> = ({ users }) => {
    const dispatch = useDispatch()
    const title = useSelector(selectTitle)
    useEffect(() => {
        if(!title) {
            dispatch(setTitle('Client set this title'))
        }
    }, [dispatch, title])
    return (
        <>
            <Head>
                <title>Users Page</title>
            </Head>
            <h1>Users Page</h1>
            {users.map((user) => {
                return <div key={user.id} >
                    <Link href={`/users/${user.id}`} >
                        <a className={styles.link}>{user.name}</a>
                    </Link>
                </div>
            })}
            <h2>{title}</h2>
        </>
    )
}


type Props = {
    users: TUser[]
}
