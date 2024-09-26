import { useContext, useState } from 'react'
import { UserContext } from '../../store/userContext'
import * as yup from 'yup';
import { useLocalStorage } from '../../hooks/useLocalStorage';

function LoginForm() {

    const {setStoredValue} = useLocalStorage("open-user");

    const userContext = useContext(UserContext);
    const INIT_VALUE = { email: "", password: "" }
    const [user, setUser] = useState(INIT_VALUE)
    function handleChange(event: { target: { name: string, value: string } }) {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    //setup validation schema
    const [errMsg, setErrMsg] = useState<[{email:string, password: string}, setErrMsg: React.Dispatch<React.SetStateAction<{email: string, password: string}>>]>({ email: "", password: "" })
    const LoginSchema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(5, "too short").max(50, "too long")
    })


    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault() //wird zu einem stinknormalen button

        try {
            await LoginSchema.validate(user, {abortEarly: false});
            //call an api um daten zu checken....dann wird der context aktualisiert...
            userContext.setAuthUser({ ...user, loggedIn: true });

            setStoredValue({ ...user, loggedIn: true })
            
            setUser(INIT_VALUE)
            setErrMsg({ email: "", password: "" })

        } catch (err) {

            if (err instanceof yup.ValidationError) {
                const newErrors = err.inner.reduce((acc, currentError) => {
                    
                        acc[currentError.path] = currentError.message;
                        return acc
                    
                },{email: "", password: ""})
                setErrMsg(newErrors)
            }


        }

    }

console.log("errors", errMsg)
    return (
        <>
            <h3>LoginForm</h3>

            <form onSubmit={handleSubmit}>

                <label htmlFor="email">Email</label><br />
                <input id="email" type="text" name="email" style={{borderColor: errMsg.email ? "red": "black"}} value={user.email} onChange={handleChange} />
                <br />
                {errMsg?.email && <p>{errMsg?.email}</p>}
                <br/>

                <label htmlFor='password'>password</label><br />
                <input id="password" name="password" style={{ borderColor: errMsg.password ? "red" : "black" }} type="text" value={user.password} onChange={handleChange} />
                <br />
                {errMsg?.password && <p>{errMsg?.password}</p>}
                <br/>

                <button type="submit">Login</button>
            </form>



        </>
    )
}

export default LoginForm