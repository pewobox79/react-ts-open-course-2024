import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

function MainLayout() {
    return (
        <>
            <Header />
            <main style={{minHeight: 300, height: "auto"}}>
                <Outlet />
            </main>
            <Footer />

        </>
    )
}

export default MainLayout