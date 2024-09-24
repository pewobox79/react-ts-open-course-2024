import { useEffect, useState } from "react"
function BlogOverview() {

    const [count, setCount] = useState(0)


    useEffect(() => {

        console.log("effect runs")
        const interval = setInterval(() => {
            setCount(prev => prev + 1)

        }, 1000)

        //cleanup function
        return () => {
            console.log("effect clear")
            clearInterval(interval)
        }

    }, [count])



    return (
        <div>BlogOverview
            <h3>{count}</h3>
        </div>
    )
}

export default BlogOverview