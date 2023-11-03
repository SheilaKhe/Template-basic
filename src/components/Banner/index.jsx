import './_banner.scss'

function Banner() {
    return (
        <section className="banner">
            <img src="https://placehold.co/1800x800" alt="Bannière web" className="banner__desk" />
            <img src="https://placehold.co/750x1100" alt="Bannière mobile" className="banner__mobile" />
        </section>
    )
}

export default Banner