import { useState } from 'react'

const Paragraph = (props) => {

    const [clicked, setClicked] = useState(false);

    function handleClick() {
        setClicked(!clicked)
    }

    return <p
        onClick={handleClick}
        style={{ color: clicked ? "red" : "black" }}>
        {props.text}
    </p>
}

export default Paragraph