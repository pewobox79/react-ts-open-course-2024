import { Link } from 'react-router-dom'
import styles from '../../styles/BlogOverview.module.css'

function PostItem({ title, id }: { title: string, id:string }) {
    return (
        <Link to={`/blog/${id}`}>
            <div className={`${styles.articleItemWrapper} ${styles.backgroundColor}`}>{title}</div>
        </Link>
    )
}

export default PostItem