import { Comments, CreateComment } from "./Comments"
import usePosts from "../hooks/usePosts"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { usePostsCreate } from "../hooks/usePostsCreate"
import { reRenderContext } from "../context/RerenderContext"

function Posts() {
    const { isPost } = useContext(reRenderContext)
    const { data } = usePosts()

    useEffect(() => {}, [isPost])
    
    return (
        <>
            {
                data.map(item => {
                    const { comment, content, id, title } = item

                    return (
                        <div className="posts" key={id}>
                            <div className="post">
                                <PostContent data={
                                    { content, id, title }
                                } />
                                <div className="comments">
                                    <Comments data={comment}/>
                                    <CreateComment data={id}/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export function PostContent(props:any) {
    const { title, content } = props.data
    
    return (
        <>
            <div className="post-prop">
                <h2>Title</h2>
                <label htmlFor="">{title}</label>
                <h2>Content</h2>
                <label htmlFor="">{content}</label>
            </div>
        </>
    )
}

export function CreatePost() {
    const [title, SetTitle] = useState('')
    const [content, Setcontent] = useState('')

    const { isPost, changePost } = useContext(reRenderContext)

    return (
        <div className="createPost">
            <input onChange={(e) => SetTitle(e.target.value)} type="text" placeholder='title' />
            <input onChange={(e) => Setcontent(e.target.value)} type="text" placeholder='content' />
            <button onClick={() => {
                usePostsCreate(title, content)
                changePost(!isPost)
            }}>Create</button>
        </div>
    )
}

export default Posts