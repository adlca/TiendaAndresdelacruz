export default function Navbar() {
    return (
        <div className="header-blue">
            <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
                <div className="container">
                    <div className="navbar-left">
                    <a className="navbar-brand" href="#">Tienda</a>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav">
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">Contacto</a></li>
                            <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Servicios</a>
                                <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">Logo design</a><a className="dropdown-item" role="presentation" href="#">Banner design</a><a className="dropdown-item" role="presentation" href="#">content writing</a></div>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="navbar-left">
                    <a className="login" href="#">Log In</a>
                        <a className="btn btn-light action-button" role="button" href="#">Signup</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}