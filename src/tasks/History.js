import React, { Component } from 'react'
import TasksDao from '../database/TasksDAO';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default class History extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             oldTasks: [],
             taskToUpdate: {},
             search: ""
        }
    }

    setButton = () => {
        var btns = document.querySelectorAll(".link-button");
        btns.forEach(function (btn){
            if(btn.classList.contains("btn-secondary")){
                btn.classList.remove("btn-secondary");
                btn.classList.add("btn-outline-secondary");
            }
        });
        var btnHere = document.getElementById("link-btn-history");
        btnHere.classList.remove("btn-outline-secondary");
        btnHere.classList.add("btn-secondary");
    }
    
    componentDidMount() {
        this.loadOldTasks();
        this.setButton();
    }

    loadOldTasks = () => {
        TasksDao.getInstance().getOldTasks()
            .then( result => {
                this.setState({oldTasks: result});        
            });
    }

    searchChange = (event) => {
        this.setState({search: event.target.value})
    }

    moveTaskToToday = (task) => {
        task.date = new Date();
        TasksDao.getInstance().update(task)
            .then( result => {
                this.loadOldTasks();
            });
    }

    moveTaskToTomorrow = (task) => {
        task.date = new Date(Date.now() + 1000*60*60*24);
        TasksDao.getInstance().update(task)
            .then( result => {
                this.loadOldTasks();
            });
    }

    deleteTask = (id) => {
        TasksDao.getInstance().delete(id)
            .then( result => {
                this.loadOldTasks();
            });
    }

    toggleTaskCompletion = (task) => {
        TasksDao.getInstance().update(task)
            .then( result => {
                this.loadOldTasks();
            });
    }

    render() {
        return (
            <div className="row d-flex justify-content-center mt-5 pt-sm-4">
                <div className="my-2 col-md-10 p-2">
                    <div className="d-flex gap-2">
                        <div className="col-1"></div>
                        <div className="d-flex col-10 justify-content-center">
                            <div className="col-md-4 col-sm-6">
                                <input className="form-control bg-dark text-white" type="text" placeholder="Search" aria-label="Search" onChange={this.searchChange}/>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                    <hr />
                    <table className="table text-white">
                        <thead>
                            <tr>
                                <th scope="col" className="col-2 col-sm-1 col-md-2 col-lg-1">Done</th>
                                <th scope="col" >Name</th>
                                <th scope="col" >Description</th>
                                <th scope="col" className="col-3 col-lg-2">Date</th>
                                <th scope="col" className="col-2 col-sm-1 col-md-2 col-lg-2"></th>
                            </tr>
                        </thead>
                        <tbody className="align-middle">
                            {this.state.oldTasks && this.state.oldTasks.map( (task) => {
                                if((task.name.toLowerCase().search(this.state.search.toLowerCase()) !== -1) || (task.desc.toLowerCase().search(this.state.search.toLowerCase()) !== -1)) {
                                    return <tr key={task.id}>
                                        <td>
                                            {task.completed ? 
                                                <Tippy content="Mark as not done">
                                                    <button className="btn btn-success btn-sm" onClick={() => {task.completed = false; this.toggleTaskCompletion(task);}}><i className="bi bi-check-lg"></i></button>
                                                </Tippy>
                                                : <Tippy content="Mark as done">
                                                    <button className="btn btn-outline-success btn-sm" onClick={ () => {task.completed = true; this.toggleTaskCompletion(task);}}><i className="bi bi-check-lg" style={{opacity: 0}}></i></button>
                                                </Tippy>
                                            }
                                        </td>  
                                        <td>{task.name}</td>  
                                        <td>{task.desc}</td>  
                                        <td>{task.date.toDateString()}</td>  
                                        <td>
                                            <div className="d-flex flex-column flex-lg-row gap-2">
                                                <Tippy content="Move to today">
                                                    <button className="btn btn-secondary btn-sm" type="button" onClick={() => this.moveTaskToToday(task)}><i className="bi bi-arrow-return-left"></i></button>
                                                </Tippy>
                                                <Tippy content="Move to tomorrow">
                                                    <button className="btn btn-secondary btn-sm" type="button" onClick={() => this.moveTaskToTomorrow(task)}><i className="bi bi-arrow-return-right"></i></button>
                                                </Tippy>
                                                <Tippy content="Delete task">
                                                    <button className="btn btn-danger btn-sm" type="button" onClick={() => this.deleteTask(task.id)}><i className="bi bi-trash"></i></button>
                                                </Tippy>
                                            </div>
                                        </td>  
                                    </tr>
                                } else {
                                    return <div key={task.id}></div>
                                }
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
