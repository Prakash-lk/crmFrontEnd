import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListTicketComponent from './components/ListTicketComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateTicketComponent from './components/CreateTicketComponent';
import UpdateTicketComponent from './components/UpdateTicketComponent';
import ViewTicketComponent from './components/ViewTicketComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListTicketComponent}></Route>
                          <Route path = "/tickets" component = {ListTicketComponent}></Route>
                          <Route path = "/add-ticket/:id" component = {CreateTicketComponent}></Route>
                          <Route path = "/view-ticket/:id" component = {ViewTicketComponent}></Route>
                          {/* <Route path = "/update-ticket/:id" component = {UpdateTicketComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
