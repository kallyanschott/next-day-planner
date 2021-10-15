import React, { Component } from 'react'
import TasksDao from '../database/TasksDAO';

export default class TodaysTasks extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todaysTasks: []
        }
    }

    loadTodaysTasks () {
        TasksDao.getInstance().getTodaysTasks()
            .then( result =>
                this.setState({todaysTasks: result})
            );
    }

    componentDidMount() {
        this.loadTodaysTasks();
    }
    

    render() {
        return (
            <div className="row">
                {this.state.todaysTasks && this.state.todaysTasks.map( (task) => {
                    return <div className="col-md-4 col-sm-6 my-2">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{task.name}</h5>
                                <p class="card-text">{task.desc}</p>
                                <button class="btn btn-primary">Concluir</button>
                            </div>
                        </div>  
                    </div>
                })}
            </div>
        )
    }
}
