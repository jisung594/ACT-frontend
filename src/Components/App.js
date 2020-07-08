import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './Home'
import '../Styling/App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div className="App">

            <h2>TEST</h2>


            <div className="main">
              <Switch>
                <Route path='/' component={Home} exact/>
              </Switch>
            </div>


          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
