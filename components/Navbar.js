import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav className="navbar p-4 navbar-expand-lg bg-dark sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="#">BANYUWANGIKU</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <Link href="/" legacyBehavior>
                                    <a className="nav-link active">Beranda</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/destinasi" legacyBehavior>
                                    <a className="nav-link">Destinasi</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/galeri" legacyBehavior>
                                    <a className="nav-link">Galeri</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/artikel" legacyBehavior>
                                    <a className="nav-link">Artikel</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <a className="btn btn-link" href="#" role="button" style={{ textDecoration: 'none', color: 'white' }}>Sign in</a>
                            <a className="btn btn-light" href="#" role="button">Create Account</a>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <nav className="navbar p-4 navbar-expand-lg fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">BANYUWANGIKU</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/" legacyBehavior>
                                    <a className="nav-link active">Beranda</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/destinasi" legacyBehavior>
                                    <a className="nav-link">Destinasi</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/galeri" legacyBehavior>
                                    <a className="nav-link">Galeri</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="" legacyBehavior>
                                    <a className="nav-link" href="artikel.html">Artikel</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <a className="btn btn-link" href="#" role="button" style={{ textDecoration: 'none', color: 'white' }}>Sign in</a>
                            <a className="btn btn-dark" href="#" role="button">Create Account</a>
                        </div>
                    </div>
                </div>
            </nav> */}
        </>
    );
}

export default Navbar;