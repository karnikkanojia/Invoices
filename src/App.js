import React from 'react';
import './App.css';
import { Signup, Wrapper, Login, ForgotPassword, PrivateRoute, UpdateProfile } from './components';
import 'antd/dist/antd.min.css';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path='/' component={Wrapper}></PrivateRoute>
          <Route exact path='/signup' component={Signup}></Route>
          <Route exact path='/update-profile' component={UpdateProfile}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/forgot-password' component={ForgotPassword}></Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App