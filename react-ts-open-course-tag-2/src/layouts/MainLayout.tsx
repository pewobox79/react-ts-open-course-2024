import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from "react"
import { UserContext } from "../store/userContext"
import { useLocalStorage } from "../hooks/useLocalStorage"

function MainLayout() {

    const INIT_VALUE = { email: "", password: "", loggedIn: false };
    const {value} = useLocalStorage("open-user");

    const [authUser, setAuthUser] = useState(value ? value : INIT_VALUE)

    return (
        <UserContext.Provider value={{authUser, setAuthUser}}>
            
            <Header />
            <main style={{minHeight: 300, height: "auto"}}>
                <Outlet />
            </main>
            <Footer />

        </UserContext.Provider>
    )
}

export default MainLayout