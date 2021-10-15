import React, { Component } from 'react';
import TasksDao from './database/TasksDAO';

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       tasks: [],
       todaysTasks: [],
       tomorrowsTasks: []
    }

  }
  

  componentDidMount() {
    let tasks = TasksDao.getInstance();

    tasks.getAll().then( result =>
      this.setState({tasks: result})
    );

    //tasks.insert({name: 'Task 2', desc: 'Buy bread.', date: new Date(), completed: true});
    // let today = new Date();
    // tasks.update({id: 2, name: 'Task 2', desc: 'Buy eggs.', date: new Date(today.getFullYear(), today.getMonth(), today.getDate()-7), completed: false});
    //tasks.delete(1);
    // tasks.getTodaysTasks().then( result => {
    //   this.setState({todaysTasks: result});
    //   console.log('today', result);
    // });

    // tasks.getTomorrowsTasks().then( result => {
    //   this.setState({tomorrowsTasks: result});
    //   console.log('tomorrow', result);
    // });

    //tasks.deleteOldTasks();


  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Bem vindo!</h1>
      </header>
    </div>
    )
  }
}

