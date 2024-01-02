import axios from "axios"
// import { useEffect } from "react"

async function useComments(comment: string, id: string) {
    await axios.put('http://localhost:3001/comment/add', {
        id,
        content: comment
    })
    // async function createComment() {
    //     console.log(comment, id)
    // }

    // useEffect(() =>{
    //     createComment()
    // }, [])
}

export default useComments