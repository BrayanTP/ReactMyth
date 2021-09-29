import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import FormMain from './FormMain';
import DiosesMain from './DiosesMain';



const App = () =>(
  <Router>
    <Route path="/" exact component = {LandingPage} />
    <Route path="/Form" exact component = {FormMain} />
    <Route path="/Dioses" exact component = {DiosesMain} />
  </Router>
)

export default App;
