import { FC } from 'react'
import { TUser } from '../../types'
import { GetServerSideProps } from 'next'
import User from '../../components/Users/User'

const Userpage: FC<Props> = ({ user }) => {
    return (
        <User user={user}/>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await res.json()
    if (!user) {
        return {
            notFound: true
        }
    }
    return {
        props: { user }
    }
}

export default Userpage


interface Props {
    user: TUser
}