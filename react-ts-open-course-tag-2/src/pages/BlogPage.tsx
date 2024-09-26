import BlogOverview from "../components/BlogOverview"
import { useLocalStorage } from "../hooks/useLocalStorage"

function BlogPage() {

    const {removeItem} = useLocalStorage("open-user");

    function handleLogout(){

        removeItem();
        document.location.reload();

    }

    return (
        <>
            <h2>My Blog Article List</h2>
            <button onClick={handleLogout}>logout</button>
            <BlogOverview />
            </>
    )
}

export default BlogPage