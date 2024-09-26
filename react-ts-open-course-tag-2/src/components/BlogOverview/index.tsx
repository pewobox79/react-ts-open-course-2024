
import PostItem from "./PostItem";
import { useFetch } from "../../hooks/useFetch";

function BlogOverview() {

    
    //const [isLoading, setIsLoading] = useState(false)

    

    /* useEffect(() => {
        
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

    }, []) */


    const { data = [], isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

    const PostList = data?.map((item: { id: string, title: string }) => {
        return <PostItem key={item.id} title={item.title} id={item.id} />
    })

    return (<>
        {isLoading ? <h4>data loading...</h4> : PostList}
        {error && <p>{error.msg}</p> }
        
    </>
    )
}

export default BlogOverview