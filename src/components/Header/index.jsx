import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/">
                    <img src="" alt="Logo site" className="header__nav--logo" />
                </Link>
            </nav>
        </header>
    )
}

export default Header