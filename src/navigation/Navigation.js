import React, { Component } from 'react'
import About from '../about/About'
import TodaysTasks from '../tasks/TodaysTasks'
import TomorrowsTasks from '../tasks/TomorrowsTasks'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <ul className="nav nav-pills m-3 justify-content-center" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-today-tab" data-bs-toggle="pill" data-bs-target="#pills-today" type="button" role="tab" aria-controls="pills-today" aria-selected="true">Today</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-tomorrow-tab" data-bs-toggle="pill" data-bs-target="#pills-tomorrow" type="button" role="tab" aria-controls="pills-tomorrow" aria-selected="false">Tomorrow</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-about-tab" data-bs-toggle="pill" data-bs-target="#pills-about" type="button" role="tab" aria-controls="pills-about" aria-selected="false">About</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-today" role="tabpanel" aria-labelledby="pills-today-tab"><TodaysTasks/></div>
                <div className="tab-pane fade" id="pills-tomorrow" role="tabpanel" aria-labelledby="pills-tomorrow-tab"><TomorrowsTasks/></div>
                <div className="tab-pane fade" id="pills-about" role="tabpanel" aria-labelledby="pills-about-tab"><About /></div>
                </div>
            </div>
        )
    }
}
