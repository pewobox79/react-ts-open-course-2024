import { useEffect, useState } from "react";
import PostItem from "./PostItem";

function BlogOverview() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                //simulation von verzögerung server
                setTimeout(() => {
                    setPosts(data)
                    setIsLoading(false)
                }, 3000)

            })

    }, [])



    const PostList = posts.map((item: { id: string, title: string }) => {
        return <PostItem key={item.id} title={item.title} id={item.id} />
    })

    return (<>
        {isLoading ? <h4>data loading...</h4> : PostList}
    </>
    )
}

export default BlogOverview