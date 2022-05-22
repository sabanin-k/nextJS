import Head from 'next/head'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { selectTitle } from '../../../store/reducers/app'
import { TUser } from '../../../types'

export const User: FC<Props> = ({ user }) => {
    const title = useSelector(selectTitle)
    return (
        <>
            <Head>
                <title>User Page</title>
            </Head>
            <div>
                <h1>{user.name}</h1>
                <p>Name: {user.username}</p>
                <p>Email: {user.email}</p>
            </div>
            <h2>{title}</h2>
        </>
    )
}


type Props = {
    user: TUser
}