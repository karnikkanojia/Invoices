import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Empty from "../../assets/empty.svg";
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useAuth } from "../../contexts/AuthContext";
import moment from "moment";

const Transactions = () => {
  
  const collectionRef = collection(db, 'Bills');
  const { getEmail } = useAuth();
  const [transactions, setTransactions] = useState([]);

  const emailNow = getEmail();
  useEffect(() => {
    
    const getData = async () => {
      const data = await getDocs(collectionRef);
      setTransactions(data?.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    };

    getData();
  }, []);

  const myInvoices = transactions.filter(({ email }) => email===emailNow);

  if(myInvoices.length === 0) {

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
        {transactions.map(({id, time, name, amount, status, email}) => {
            if(email===emailNow)
              return <Cards key={id+name} id={id} date={moment.unix(time.seconds).format('Do MMM YYYY')} name={name} amount={amount} status={status} />
        })}
    </div>
  );
};

export default Transactions;
