import { useState } from 'react'

function LoginForm() {

    const INIT_VALUE = { email: "", password: "" }

    const [user, setUser] = useState(INIT_VALUE)

    function handleChange(event:{target:{name: string, value: string}}) {

        setUser({...user,[event.target.name]: event.target.value})
        console.log("inner user", user)
    }

    function handleSubmit(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault() //wird zu einem stinknormalen button
        
        console.log("submitted data", event)
        setUser(INIT_VALUE)
    }

    console.log("outer user", user)
    return (
        <><h3>LoginForm</h3>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label><br />
                <input id="email" type="text" name="email" value={user.email} onChange={handleChange} /><br />
                <label htmlFor='password'>password</label><br />
                <input id="password" name="password" type="text" value={user.password} onChange={handleChange} /><br />
                <button type="submit">Login</button>
            </form>



        </>
    )
}

export default LoginForm