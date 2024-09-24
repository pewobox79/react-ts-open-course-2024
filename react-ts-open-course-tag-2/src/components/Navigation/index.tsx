import NavItem from "./NavItem"
import { navData } from "../../store/navData"

function Navigation() {

    const NavList = navData.map((item) => {
        return <NavItem key={item.id} {...item} />
    })

    return (
        <nav>{NavList}</nav>
    )
}

export default Navigation