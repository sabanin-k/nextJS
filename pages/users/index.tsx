import { FC } from "react"
import { GetStaticProps } from "next"
import { TUser } from "../../types"
import Users from "../../components/Users"

const UsersPage: FC<Props> = ({ users }) => {
    return (
        <Users users={users} />
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    if (!users) {
        return {notFound: true}   
    }

    return {
        props: { users }
    }
}

export default UsersPage


type Props = {
    users: TUser[]
}
