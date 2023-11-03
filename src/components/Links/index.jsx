import link from '../../datas/links.json'

function Links() {
    return (
        <section className="footer__links">
            <ul className="footer__links__list">
                {link.map((link) => (
                    <li className="footer__links__list--item" key={link.id}>
                         <Link to={link.url}>
                            {link.name}
                         </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Links