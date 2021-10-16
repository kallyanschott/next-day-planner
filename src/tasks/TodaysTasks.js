import React, { Component } from 'react'
import TasksDao from '../database/TasksDAO';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default class TodaysTasks extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todaysTasks: [],
             newTaskName: "",
             newTaskDesc: "",
             taskToUpdate: {},
             insertingTask: true,
             search: "",
             validTask: true
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
        var btnHere = document.getElementById("link-btn-today");
        btnHere.classList.remove("btn-outline-secondary");
        btnHere.classList.add("btn-secondary");
    }

    loadTodaysTasks = () => {
        TasksDao.getInstance().getTodaysTasks()
            .then( result => {
                this.setState({todaysTasks: result});
            });
    }

    componentDidMount() {
        this.loadTodaysTasks();
        this.setButton();
    }

    newTaskNameChange = (event) => {
        this.setState({newTaskName: event.target.value})
    }

    newTaskDescChage = (event) => {
        this.setState({newTaskDesc: event.target.value})
    }

    searchChange = (event) => {
        this.setState({search: event.target.value})
    }

    addNewTask = () => {
        this.setState({validTask: true});
        let today = new Date();
        let task = {name: this.state.newTaskName, desc: this.state.newTaskDesc, date: today, completed: false};
        TasksDao.getInstance().insert(task)
            .then( result => {
                this.loadTodaysTasks();
            });
    }

    editTask = () => {
        this.setState({validTask: true});
        let task = this.state.taskToUpdate;
        task.name = this.state.newTaskName;
        task.desc = this.state.newTaskDesc;
        TasksDao.getInstance().update(task)
            .then( result => {
                this.loadTodaysTasks();
            });
    }

    deleteTask = (id) => {
        TasksDao.getInstance().delete(id)
            .then( result => {
                this.loadTodaysTasks();
            });
    }

    toggleTaskCompletion = (task) => {
        TasksDao.getInstance().update(task)
            .then( result => {
                this.loadTodaysTasks();
            });
    }

    moveTaskToTomorrow = (task) => {
        task.date = new Date(Date.now() + 1000*60*60*24);
        TasksDao.getInstance().update(task)
            .then( result => {
                this.loadTodaysTasks();
            });
    }

    render() {
        return (
            <div className="row d-flex justify-content-center">
                <div className="my-2 col-md-10 p-2">
                    <div className="d-flex gap-2">
                        <div className="col-1">
                            <Tippy content="Add new task">
                                <button type="button" className="btn btn-secondary" onClick={() => this.setState({insertingTask: true, newTaskName: "", newTaskDesc: "", validTask: true})} data-bs-toggle="modal" data-bs-target="#newTaskModal"><i className="bi bi-plus-lg"></i></button>
                            </Tippy>
                        </div>
                        <div className="d-flex col-11 justify-content-center">
                            <div className="col-md-4 col-sm-6 me-sm-5 pe-sm-5">
                                <input className="form-control me-2 bg-dark text-white" type="text" placeholder="Search" aria-label="Search" onChange={this.searchChange}/>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="modal fade" id="newTaskModal" tabIndex="-1" aria-labelledby="newTaskModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content bg-dark text-white">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="newTaskModalLabel">{this.state.insertingTask ? "New Task" : "Edit Task"}</h5>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="task-name" className="col-form-label">Name:</label>
                                            <input value={this.state.newTaskName} onChange={this.newTaskNameChange} type="text" className="form-control bg-dark text-white" id="task-name" placeholder="Do something amazing!"/>
                                            {!this.state.validTask ? <label className="text-danger form-text"> * Required</label> : <div></div>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description-text" className="col-form-label">Description:</label>
                                            <textarea value={this.state.newTaskDesc} onChange={this.newTaskDescChage} className="form-control bg-dark text-white" id="description-text"></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    {this.state.newTaskName !== "" ?
                                        <button type="button" className="btn btn-success" id="task-submit-button" onClick={() => {this.state.insertingTask ? this.addNewTask() : this.editTask()}} data-bs-dismiss="modal">{this.state.insertingTask ? "Add" : "Save"}</button>
                                    :   <button type="button" className="btn btn-success" id="task-submit-button" onClick={() => {this.setState({validTask: false})}}>{this.state.insertingTask ? "Add" : "Save"}</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.todaysTasks && this.state.todaysTasks.map( (task) => {
                            if((task.name.toLowerCase().search(this.state.search) !== -1) || (task.desc.toLowerCase().search(this.state.search) !== -1)) {
                                return <div key={task.id} className="col-md-4 col-sm-6 my-2">
                                    <div className="card text-white bg-dark border-secondary">
                                        <div className="card-body">
                                            <h5 className="card-title">{task.name}</h5>
                                            <p className="card-text">{task.desc}</p>
                                            <div className="d-flex">
                                                <div className="col">
                                                        {task.completed ? 
                                                        <Tippy content="Mark as not done">
                                                            <button className="btn btn-success" onClick={() => {task.completed = false; this.toggleTaskCompletion(task);}}><i className="bi bi-check-lg"></i></button>
                                                        </Tippy>
                                                        : <Tippy content="Mark as done">
                                                            <button className="btn btn-outline-success" onClick={ () => {task.completed = true; this.toggleTaskCompletion(task);}}><i className="bi bi-check-lg" style={{opacity: 0}}></i></button>
                                                        </Tippy>
                                                    }
                                                </div>
                                                <div className="d-flex flex-row gap-2 justify-content-end">
                                                    <Tippy content="Edit task">
                                                        <button className="btn btn-secondary" type="button" onClick={() => {
                                                                this.setState({taskToUpdate: task, newTaskName: task.name, newTaskDesc: task.desc, insertingTask: false});
                                                            }} data-bs-toggle="modal" data-bs-target="#newTaskModal">
                                                            <i className="bi bi-pencil-square"></i>
                                                        </button>
                                                    </Tippy>
                                                    <Tippy content="Do it tomorrow">
                                                        <button className="btn btn-secondary" type="button" onClick={() => this.moveTaskToTomorrow(task)}><i className="bi bi-arrow-return-right"></i></button>
                                                    </Tippy>
                                                    <Tippy content="Delete task">
                                                        <button className="btn btn-danger" type="button" onClick={() => this.deleteTask(task.id)}><i className="bi bi-trash"></i></button>
                                                    </Tippy>
                                                </div> 
                                            </div>   
                                        </div>
                                    </div>  
                                </div>
                            } else {
                                return <div key={task.id}></div>
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
