import React, { useState } from "react";
import Cards from "../Cards/Cards";
import Empty from "../../assets/empty.svg";

// const temp = [
//   {
//     id: 'RT3080',
//     date: '19 Aug 2021',
//     name: 'Karnik Kanojia',
//     amount: '1800.90',
//     status: 'paid'
//   },
//   {
//     id: 'XM9141',
//     date: '12 Aug 2021',
//     name: 'Mihir SP',
//     amount: '2800.90',
//     status: 'pending'
//   }
// ]

const Transactions = ({ transactions }) => {

  if(transactions.length === 0) {

    return (
      <div className="d-flex flex-column align-items-center w-100">
        <div className="empty-list-image">
          <img src={Empty} alt="empty-list" />
        </div>
        <div className="content m-5">
          <div className="bold-text text-center" style={{ fontSize: '20px'}}>
            There is nothing here
          </div>
          <div className="passive-text text-center m-2" style={{ maxWidth: '280px', fontSize: '12px'}}>
          Create an invoice by clicking the <strong>New Invoice</strong> button and get started, or change the <strong>Filter by Status</strong>
          </div>
        </div>
      </div>
    )
  }

  return (

    <div className="app__transaction-container">
        {transactions.map(({id, date, name, amount, status}) => (
            <Cards key={id+name} id={id} date={date} name={name} amount={amount} status={status} />
        ))}
    </div>
  );
};

export default Transactions;
