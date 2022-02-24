import React from 'react';
import { Header, Transactions, Navbar } from './';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Wrapper = () => {
  return (
    <div className='app__wrapper'>
        <Navbar/>
        <div className='pad-around'>
          <Header />
          <Transactions />
        </div>
    </div>
  )
}

export default Wrapper