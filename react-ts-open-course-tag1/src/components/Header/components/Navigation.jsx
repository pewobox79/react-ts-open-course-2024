import NavItem from './NavItem';
import { navData } from '../../../store/navData'

export default function Navigation() {

    const NavList = navData.map((item) => {

        return <NavItem
            key={item.id}
            title={item.title}
            href={item.href}
        />

    })



    return <nav>
        <ul>
            {NavList}
        </ul>
    </nav>
}