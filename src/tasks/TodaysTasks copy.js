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
            <div className="accordion " id="todayTasksAccordions">
                {this.state.todaysTasks && this.state.todaysTasks.map( (task) => {
                    return <div className="accordion-item my-1">
                        <h2 className="accordion-header" id={"todayAccordion-heading-" + task.id}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#todayAccordion-collapse-" + task.id} aria-expanded="true" aria-controls={"todayAccordion-collapse-" + task.id}>
                            {task.name}
                        </button>
                        </h2>
                        <div id={"todayAccordion-collapse-" + task.id} className="accordion-collapse collapse" aria-labelledby={"todayAccordion-heading-" + task.id}>
                            <div className="accordion-body">
                                <div className="row">{task.desc}</div>
                                <div className="row gap-2 justify-content-end">
                                    <button className="btn btn-success col-md-1 col-4">Concluir</button>
                                </div>
                            </div>
                        </div>
                    </div>  
                })}
            </div>
        )
    }
}
