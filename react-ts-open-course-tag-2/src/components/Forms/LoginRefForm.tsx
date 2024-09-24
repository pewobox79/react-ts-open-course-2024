import { useRef } from 'react'

function LoginRefForm() {

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    function handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault();

        const user = {
            email: emailRef.current?.value,
            password: passwordRef.current?.value
        }


        console.log("submit", user)
    }

    console.log("emailRef", emailRef)
    console.log("passwordRef", passwordRef)

    return (
        <>
            <h3>LoginRef Form</h3>

            <label onClick={()=>emailRef.current?.focus()}>Email</label><br />
            <input type="text" name="email" ref={emailRef} /><br />
            <label htmlFor='password'>password</label><br />
            <input id="password" name="password" type="text" ref={passwordRef} /><br />
            <button onClick={handleSubmit}>Login</button>

        </>
    )
}

export default LoginRefForm