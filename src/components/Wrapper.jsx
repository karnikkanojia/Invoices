import React from 'react';
import { Header, Transactions, Navbar, FormInvoice } from './';
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
        <div className='pad-around'>
          <FormInvoice style={{ minHeight: '100vh' }} />
        </div>
    </div>
  )
}

export default Wrapper;