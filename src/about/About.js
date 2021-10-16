import React, { Component } from 'react'

export default class About extends Component {

    setButton = () => {
        var btns = document.querySelectorAll(".link-button");
        btns.forEach(function (btn){
            if(btn.classList.contains("btn-secondary")){
                btn.classList.remove("btn-secondary");
                btn.classList.add("btn-outline-secondary");
            }
        });
        var btnHere = document.getElementById("link-btn-about");
        btnHere.classList.remove("btn-outline-secondary");
        btnHere.classList.add("btn-secondary");
    }

    componentDidMount() {
        this.setButton();
    }

    render() {
        return (
            <div>
                About Next Day Planner.
            </div>
        )
    }
}
