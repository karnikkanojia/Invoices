import React from 'react';
import './App.css';
import { Signup, Wrapper, Login, ForgotPassword } from './components';
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
          <Route exact path='/forgot-password' component={ForgotPassword}></Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App