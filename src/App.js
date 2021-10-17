import React, { Component } from 'react';
import Navigation from './navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import TodaysTasks from './tasks/TodaysTasks';
import TomorrowsTasks from './tasks/TomorrowsTasks';
import About from './about/About';
import History from './tasks/History'

export default class App extends Component {

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

