import React from 'react'
import logo from '../assets/Logo.png'
import { Button } from 'antd'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand ms-4 mb-2" href="#">
                    <img src={logo} alt="Logo" width={80} />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav myNav ms-auto">
                        <li className="nav-item active me-5 mb-1 ms-2">
                            <a className="nav-link" href="#">
                                Destinations
                            </a>
                        </li>
                        <li className="nav-item me-5 mb-1 ms-2">
                            <a className="nav-link" href="#">
                                Hotels
                            </a>
                        </li>
                        <li className="nav-item me-5 mb-1 ms-2">
                            <a className="nav-link" href="#">
                                Flights
                            </a>
                        </li>
                        <li className="nav-item me-5 mb-1 ms-2">
                            <a className="nav-link" href="#">
                                Bookings
                            </a>
                        </li>
                        <li className="nav-item me-5 align-content-center ms-2">
                            <Button color="danger" variant="outlined">
                                Login
                            </Button>
                        </li> <br />
                        <li className="nav-item me-5 align-content-center ms-2">
                            <Button color="danger" variant="solid">
                                Sign up
                            </Button>
                        </li>
                    </ul>
                </div>
            </nav>


        </>
    )
}

export default Navbar