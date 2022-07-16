import styles from './Header.module.css'
const Header = () => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark  bg-dark ${styles.themeColor} `}>
            <div className="container">
                <a className="navbar-brand" href="/#">
                    Movie Reaper
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`navbar-nav mx-auto mb-2 mb-lg-0`}>
                        <li className="nav-item">
                            <input className="form-control me-2 search" type="search" placeholder="Search" aria-label="Search" />
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Trending</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Browse Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Upload Movie</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header