import {useParams} from 'react-router-dom'
import { blogData } from '../store/blogData'

function SingleArticlePage() {

    const params = useParams()

    const selectedArticle = blogData.find((item)=> item.id === params.id )

    return (
        <div>
            <h1>{selectedArticle.title}</h1>
            <p>{selectedArticle.body}</p>
            <author>
                {selectedArticle.author}
            </author>
        </div>
    )
}

export default SingleArticlePage