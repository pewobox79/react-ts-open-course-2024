import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {

    return <>
        <Header />
        <main>
            <Outlet/>
        </main>
        <Footer />
    </>
}

export default MainLayout