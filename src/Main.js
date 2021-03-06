import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Expenses from './Expenses';
import LineGraph from './LineGraph';
import Calculator from './Calculator';
import SpendingCalc from './SpendingCalc';
import Converter from './Converter';
import Profile from './Profile';
// import ExpenseForm from './ExpenseForm';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/profile" component={Profile}/>
    {/* <Route path="/expenses" component={Expenses} /> */}
    <Route path="/currency" component={Converter} />
    <Route path="/linegraph" component={LineGraph} />
    <Route path="/calculator" component={Calculator} />
    <Route path="/spendingcalc" component={SpendingCalc} />
  </Switch>
);

export default Main;
