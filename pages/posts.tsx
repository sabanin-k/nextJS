import axios from 'axios'
import { GetServerSideProps } from 'next'
import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getPosts2, selectPosts } from '../store/reducers/posts'
import { TPost } from '../types'

const Posts: FC<Props> = ({ posts }) => {
    const dispatch = useAppDispatch()
    const postsRedux = useAppSelector(selectPosts)

    return (
        <>
            <button onClick={() => dispatch(getPosts2())}>Get Posts</button>
            {posts
                ? posts.slice(0, 10).map(post => {
                    return (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    )
                })
                : <p>Постов нет :(</p>
            }

        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await axios.get<TPost[]>('https://jsonplaceholder.typicode.com/posts')
    const posts = res.data
    return {
        props: { posts }
    }
}

export default Posts


type Props = {
    posts: TPost[]
}