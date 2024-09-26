import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from "../store/userContext"

function ProtectedRoutes() {

    const user = useContext(UserContext)


    if(!user.authUser.loggedIn){
        return <Navigate to={"/"} replace />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default ProtectedRoutes