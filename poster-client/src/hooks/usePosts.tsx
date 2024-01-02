import axios from "axios";
import { useState } from "react";

export default function usePosts() {
    const [posts, SetPosts] = useState([]);

    async function getPosts() {
        const res = await axios.get("http://localhost:3000/post/get");
        SetPosts(res.data);
    }
    getPosts()

    return { data: posts };
}
