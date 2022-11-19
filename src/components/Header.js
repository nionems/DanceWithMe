import { Navigation } from "./Navigation"
import { Link } from "react-router-dom"
import Logo from '../WhiteLogo-01.png'

export function Header(props) {
    return (
        <header className="navbar bg-dark navbar-expand-lg">
            <div className="container-fluid justify-content-between">
                <Link className="navbar-brand" to="/">{props.title} <img className='logo' src={Logo} /> </Link>
                <div className="collapse navbar-collapse">
                    <Navigation items={props.headernav} />
                </div>
            </div>
        </header>
    )
}