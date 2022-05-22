import Head from "next/head"
import { FC } from "react"
import { useSelector } from "react-redux"
import { selectTitle } from "../../store/reducers/app"

export const Home: FC= () => {
    const title = useSelector(selectTitle)

    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>
            <h1>Home Page</h1>
            <h2>{title}</h2>
        </>
    )
}

