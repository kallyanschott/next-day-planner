import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import About from '../about/About'
import TodaysTasks from '../tasks/TodaysTasks'
import TomorrowsTasks from '../tasks/TomorrowsTasks'

export default class Navigation2 extends Component {
    render() {
        return (
            <div>
                <ul className="nav m-3 justify-content-center gap-2">
                    <li className="nav-item">
                        <Link to="/" className="nav-link link-button text-white btn btn-outline-secondary" id="link-btn-today" type="button">Today</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tomorrow" className="nav-link link-button text-white btn btn-outline-secondary" id="link-btn-tomorrow" type="button">Tomorrow</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/history" className="nav-link link-button text-white btn btn-outline-secondary" id="link-btn-history" type="button">History</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link link-button text-white btn btn-outline-secondary" id="link-btn-about" type="button">About</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
