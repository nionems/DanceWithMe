import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './Navigation.css';

export function Navigation(props) {
    const [navItems, setNavItems] = useState([])

    useEffect(() => {
        // if( navItems.length == 0 ) {
        //     console.log( props.items )
        //     setNavItems( props.items )
        // }
        setNavItems(props.items)
    }, [props.items])

    if (navItems.length > 0) {
        // NavigationLinks collection return html code for each item in the array
        const NavigationLinks = navItems.map((item, itemKey) => {
            return (
                <NavLink to={item.path} className="nav-link text-white " key={itemKey} >{item.name}</NavLink>
            )
        })
        return (
            <nav className="navbar-nav me-auto mb-2 mb-lg-0">
                {NavigationLinks}
            </nav>
        )
    }
    else {
        return null
    }

}