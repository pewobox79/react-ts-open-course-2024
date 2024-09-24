import { Link } from "react-router-dom"

function ArticleItem({ title, id }) {

    const myStyling = {
        border: "1px solid lightgray",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "10px"
    }

    return (
        <div style={myStyling}>
            <h4>{title}</h4>
            <Link to={`/blog/${id}`}>Read more...</Link>
        </div>
    )
}

export default ArticleItem