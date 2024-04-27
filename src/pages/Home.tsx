import Navbar from "../components/Navbar"

const Home = () => {
    return (
        <>
            <section className="hero">
                <div className="container text-center">
                    <h1>AIA</h1>
                    <p>Check on your stream status</p>
                    <a href="scrap.html" className="btn btn-primary">Scrap</a>
                    <a href="items.html" className="btn btn-primary">Items</a>
                </div>
            </section>

            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>About Me</h2>
                            <p>Indie game dev working on an open-world RPG called Mana Valley.

                                Sometimes I do little thought projects that turn into smol games.</p>

                            <ul>
                                <li><a href="https://store.steampowered.com/app/1983360/Mana_Valley/">Mana Valley</a></li>
                                <li><a href="https://aiadev.itch.io/">Itch.io</a></li>
                                <li><a href="https://www.twitch.tv/the_aia">Twitch</a></li>
                                <li><a href="https://www.youtube.com/@AIAdev">Youtube</a></li>
                                <li><a href="https://aiadev.fun/">AIADev.fun</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                            <img src="https://aiadev.fun/wp-content/uploads/2023/10/UnicornOne_Dark_HiRes.png" alt="About Us" className="img-fluid" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home