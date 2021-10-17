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
                    <h1 id='simple-next-day-planner'>Simple Next Day Planner</h1>
                    <p>Create and manage your daily tasks in a simple way.</p>
                    <h2 id='quick-overview'>Quick Overview</h2>
                    <p>There&#39;s two main to do lists: Today and Tomorrow.</p>
                    <p>In each one you can create, edit and delete your tasks.</p>
                    <p>When the day changes, your tasks that were previously in the Tomorrow list, will be transferred to Today&#39;s list, leaving Tomorrow&#39;s list empty.</p>
                    <p>You can also shift one task from today to tomorrow and vice-versa.</p>
                    <p>Missed one task? No problem. In the History you can view your past tasks and if necessary transfer them to Today&#39;s or Tomorrow&#39;s list.</p>
                    <h2 id='about-this-project'>About This Project</h2>
                    <p>This projected was created with the objective of learning and improving my skills with the technologies listed in the Credits section, mainly React and Dexie.js.</p>
                    <p>After learning the basics of IndexedDB, Dexie.js proved to be a good and easy way to better make of the IndexedDB.</p>
                    <p>Also in mind was the idea of creating a simple product I&#39;d like to use during everyday life.</p>
                    <h2 id='credits'>Credits</h2>
                    <p>Simple Next Day Planner is created using:</p>
                    <ul>
                    <li><a  className="text-white" href='https://github.com/facebook/create-react-app' target="_blank" rel="noreferrer">React</a></li>
                    <li><a className="text-white" href='https://github.com/remix-run/react-router' target="_blank" rel="noreferrer">React Router</a></li>
                    <li><a className="text-white" href='https://getbootstrap.com/' target="_blank" rel="noreferrer">Bootstrap and Bootstrap Icons</a></li>
                    <li><a className="text-white" href='https://github.com/dfahlander/Dexie.js' target="_blank" rel="noreferrer">Dexie.js</a></li>
                    <li><a className="text-white" href='https://github.com/atomiks/tippyjs' target="_blank" rel="noreferrer">Tippy.js</a></li>

                    </ul>
                    <h2 id='about-me'>About Me</h2>
                    <p>You can find more about me and my other projects on my <a className="text-white" href='https://github.com/kallyanschott' target="_blank" rel="noreferrer">GitHub</a> page.</p>
                </div>
            </div>
        )
    }
}
