import React from 'react';
import './App.css';
import { Signup, Wrapper, Login } from './components';
import 'antd/dist/antd.min.css';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path='/' component={Wrapper}></Route>
          <Route exact path='/signup' component={Signup}></Route>
          <Route exact path='/login' component={Login}></Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App