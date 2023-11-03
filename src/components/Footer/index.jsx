import { Link } from "react-router-dom"
import Links from "../Links"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faSpotify, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <footer className="footer">
            <Links />
            <ul class="footer__socials">
                <li className="footer__socials--item">
                    <Link to="">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </li>
                <li className="footer__socials--item">
                    <Link to="">
                        <FontAwesomeIcon icon={faYoutube} />
                    </Link>
                </li>
                <li className="footer__socials--item">
                    <Link to="">
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                </li>
                <li className="footer__socials--item">
                    <Link to="">
                        <FontAwesomeIcon icon={faSpotify} />
                    </Link>
                </li>
                <li className="footer__socials--item">
                    <Link to="">
                        <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                </li>

            </ul>

        </footer>
    )
}

export default Footer