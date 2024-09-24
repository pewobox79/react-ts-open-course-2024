import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function SingleArticlePage() {

    const { id } = useParams();

    const [selectedArticle, setSelectedArticle] = useState({ title: "", body: "" })
    const [articleId, setArticleId] = useState(id)

    console.log("article id", articleId)
    useEffect(() => {

        //abort controler demo nur bei reduziertem browser netz....throttle network

        const controler = new AbortController();
        const signal = controler.signal;

        fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`, {
            signal: signal
        })
            .then(res => res.json())
            .then(data => setSelectedArticle(data))

        //cleanup function
        return () => {
            controler.abort()
        }

    }, [articleId])


    return <>

        <div onClick={() => setArticleId("20")}>Artikel 20</div>
        <div onClick={() => setArticleId("33")}>Artikel 33</div>
        <div onClick={() => setArticleId("55")}>Artikel 55</div>
        <div onClick={() => setArticleId("80")}>Artikel 80</div>

        <h2>{selectedArticle.title}</h2>
        <p>{selectedArticle.body}</p>
    </>
}

export default SingleArticlePage