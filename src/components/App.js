import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './home/Home';
import Despesa from './despesas/Despesa';

import Login from './login/Login';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">Controle Financeiro</Link>
              </div>
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                  <li><Link to="/despesas">Despesas</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/despesas" component={Despesa} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
