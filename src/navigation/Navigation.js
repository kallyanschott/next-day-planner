import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {

    hideNavbar = () => {
        if(document.getElementById("navbarSupportedContent").classList.contains("show"))
            document.getElementById("navbarTogglerButton").click();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top p-1 p-sm-0">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" onClick={this.hideNavbar}>Next Day Planner</Link>
                    <button className="navbar-toggler" id="navbarTogglerButton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-3 gap-2">
                            <li className="nav-item">
                                <Link to="/" className="nav-link link-button text-white btn btn-outline-secondary col-12 px-2" id="link-btn-today" type="button" onClick={this.hideNavbar}>Today</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/tomorrow" className="nav-link link-button text-white btn btn-outline-secondary col-12 px-2" id="link-btn-tomorrow" type="button" onClick={this.hideNavbar}>Tomorrow</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/history" className="nav-link link-button text-white btn btn-outline-secondary col-12 px-2" id="link-btn-history" type="button" onClick={this.hideNavbar}>History</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link link-button text-white btn btn-outline-secondary col-12 px-2" id="link-btn-about" type="button" onClick={this.hideNavbar}>About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
