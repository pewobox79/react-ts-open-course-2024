import Button from "../components/Button"
import ReRenderExercise from "../components/excercises/ReRenderExercise"
import RenderItem1 from "../components/excercises/ReRenderExercise/RenderItem1"
import RenderItem2 from "../components/excercises/ReRenderExercise/RenderItem2"
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

            <hr/>
            <ReRenderExercise>
                <RenderItem1/>
                <RenderItem2/>

            </ReRenderExercise>
        </>
    )
}

export default Homepage