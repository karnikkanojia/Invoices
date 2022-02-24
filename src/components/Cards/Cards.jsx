import React from 'react';
import { Button } from 'antd';
import { CheckCircleFilled, ExclamationCircleFilled } from "@ant-design/icons";

import './Cards.css';

const statusPaid = {
  background: "rgb(247, 255, 250)", borderColor: "rgb(247, 255, 250)"
};

const statusPaidDarker = {
  color: "rgb(128, 213, 161)"
};

const statusPendingDarker = {
  color: "rgb(231, 142, 33)"
};

const statusPending = {
  background: "rgb(253, 249, 242)", borderColor: "rgb(253, 249, 242)"
};


const Cards = ({date, amount, id, status, name}) => {

  return (
    <div className='app__card-wrapper'>
      <div className="card-numerical">
        <div className="card-id">
          <span className='dimmed-text'>#</span><span className='bold-text'>{id.slice(0,5).toUpperCase()}</span>
        </div>
        <div className="date-amount">
          <div className="transaction-date">
            <div className='dimmed-text'>Due {date}</div>
          </div>
          <div className="transaction-amount bold-text-bigger">
            ${amount}
          </div>
        </div>
      </div>
      <div className="transaction-status">
        <div className="payee-name dimmed-text">
          {name}
        </div>
        <div className='status'>
          {status === 'paid' && (
            <Button block shape="round" icon={<CheckCircleFilled style={statusPaidDarker}/>}
            style={statusPaid}
            >
            <span style={statusPaidDarker} className='bold-text'>{status}</span>
          </Button>
          )}
          {status === 'pending' && (
            <Button block shape="round" icon={<ExclamationCircleFilled style={statusPendingDarker}/>}
            style={statusPending}
            >
            <span style={statusPendingDarker} className='bold-text'>{status}</span>
          </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cards