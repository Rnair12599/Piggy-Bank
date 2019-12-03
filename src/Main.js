import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Expenses from './Expenses';
import LineGraph from './LineGraph';
import Calculator from './Calculator';
// import ExpenseForm from './ExpenseForm';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/expenses" component={Expenses} />
    <Route path="/linegraph" component={LineGraph} />
    <Route path="/calculator" component={Calculator} />
  </Switch>
);

export default Main;