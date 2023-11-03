import { Link } from "react-router-dom"
import './header.scss'

function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/" className="header__nav--logo">
                    <img src="https://placehold.co/100x50" alt="Logo site" />
                </Link>
            </nav>
        </header>
    )
}

export default Header