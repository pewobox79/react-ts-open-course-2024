import Button from "../components/Button"
import LoginForm from "../components/Forms/LoginForm"
import LoginRefForm from "../components/Forms/LoginRefForm"

function Homepage() {

    function handleClick() {
        console.log("clicked button")
    }

    return (
        <>
            <h1>Homepage</h1>
            <hr />  
            <LoginForm />
            <hr />
            <LoginRefForm />
            <hr />
            <Button
                style={{
                    backgroundColor: "red",
                    padding: "10px 10px 20px 40px",
                    color: "blue",
                    borderRadius: "40px"
                }}
                action={handleClick}
            >
                <p>click me</p>

            </Button>
        </>
    )
}

export default Homepage