import React from 'react'
import logo from "../static/images/logo.png"

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-light" style={{ height: "6rem" }}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <img src={logo} alt="" className='mx-4' style={{ width: "4rem" }} />
                        <a className="nav-link mx-2" href="/">Harsh Gupta</a>

                    </div>
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link mx-4" href="/">Intro</a>
                        <a className="nav-link mx-4" href="/">Proj</a>
                        <a className="nav-link mx-4" href="/">Blogs</a>
                        <a className="nav-link mx-4" href="/c">Feedback</a>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar