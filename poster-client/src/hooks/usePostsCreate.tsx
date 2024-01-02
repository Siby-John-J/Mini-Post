import axios from "axios";

export async function usePostsCreate(title: string, content: string) {
    axios.post('http://localhost:3000/post/create', {
        title,
        content
    })
}