import React, { useState } from 'react';
import { Header, Transactions, Navbar, FormInvoice } from './';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Wrapper = () => {
  const [transactions, setTransactions] = useState([]);

  return (
    <div className='app__wrapper'>
        <Navbar/>
        <div className='pad-around'>
          <Header />
          <Transactions transactions={transactions} />
          <FormInvoice />
        </div>
    </div>
  )
}

export default Wrapper;