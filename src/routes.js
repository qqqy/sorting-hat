import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './components/home/home'
import House from './components/house/house';

export default 
<Switch>
  <Route path='/home' component={ Home }></Route>
  <Route path='/house/:houseid' component={ House }></Route>
</Switch>