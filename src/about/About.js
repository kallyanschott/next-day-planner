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
            <div className="row d-flex justify-content-center mt-5 pt-sm-4">
                <div className="my-2 col-md-10 p-2">
                    About Next Day Planner.
                </div>
            </div>
        )
    }
}
