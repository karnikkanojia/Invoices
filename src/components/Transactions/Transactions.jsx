import React, { useState } from "react";
import Cards from "../Cards/Cards";

const temp = [
  {
    id: 'RT3080',
    date: '19 Aug 2021',
    name: 'Karnik Kanojia',
    amount: '1800.90',
    status: 'paid'
  },
  {
    id: 'XM9141',
    date: '12 Aug 2021',
    name: 'Mihir SP',
    amount: '2800.90',
    status: 'pending'
  }
]

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  return (
    <div className="app__transaction-container">
        {temp.map(({id, date, name, amount, status}) => (
            <Cards key={id+name} id={id} date={date} name={name} amount={amount} status={status} />
        ))}
    </div>
  );
};

export default Transactions;
