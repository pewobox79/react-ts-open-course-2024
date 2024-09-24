
import { blogData } from '../../store/blogData'
import ArticleItem from './ArticleItem'

function BlogOverview() {

    const ArticleList = blogData.map((article) => {

        return <ArticleItem key={article.id}
            title={article.title}
            id={article.id} />
    })
    return (
        <><h3>BlogOverview</h3>

            {ArticleList}
        </>

    )
}

export default BlogOverview