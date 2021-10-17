import React, { Component } from 'react';
import TasksDao from './database/TasksDAO';
import Navigation from './navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import TodaysTasks from './tasks/TodaysTasks';
import TomorrowsTasks from './tasks/TomorrowsTasks';
import About from './about/About';
import History from './tasks/History'

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
    // let tasks = TasksDao.getInstance();

    // tasks.getAll().then( result =>
    //   this.setState({tasks: result})
    // );

    // tasks.insert({name: 'asdsadasdadasasdasasd', desc: 'fafafafafa aad afasdfsdadadad ad fdads', date: new Date(2021, 9, 13), completed: false});
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
      <BrowserRouter>
        <div className="container-fluid">
          <Navigation />       
          <Switch>
            <Route exact path="/">
              <TodaysTasks />
            </Route>
            <Route exact path="/tomorrow">
              <TomorrowsTasks />
            </Route>
            <Route exact path="/history">
              <History />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

