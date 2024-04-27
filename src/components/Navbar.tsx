const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">

                    <a className="navbar-brand" href="#">
                        <img style={{width: "30px"}} src="  https://aiadev.fun/wp-content/uploads/2023/10/UnicornOne_Light_HiRes.png" alt="About Us" className="img-fluid" />
                        AIA Dev
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/scrap">Scrap Totals</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/items">Items</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar