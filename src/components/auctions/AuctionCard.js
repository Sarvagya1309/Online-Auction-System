import React, { useContext, useRef, useState } from 'react';
import Countdown from 'react-countdown';
import { Button, Form, Modal, Alert, Row, Col } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import { edit } from './edit';


const renderer = ({ days, hours, minutes, seconds,miliseconds, completed, props }) => {
  if (completed) {
    return null;
  }
  

  return (
    <div className="col">

      <div className="card shadow-sm">
        <div
          style={{
            height: '320px',
            backgroundImage: `url(${props.item.imgUrl})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          className="w-100"
        />

        <div className="card-body">
          <p className="lead display-6">{props.item.title}</p>
          <div className="d-flex jsutify-content-between align-item-center">
            <h5>
               {hours} hr: {minutes} min: {seconds} sec
            </h5>
          </div>
          <p className="card-text">About Item: {props.item.desc} <br/>Owner: {props.item.email}</p>
          <div>Highest Bidder: {props.item.curWinner}
          </div>
          <div className="d-flex justify-content-between align-item-center">
            
            <div>
            {!props.owner ? (
                <div
                  onClick={() => props.bidAuction()}
                  className="btn btn-outline-secondary"
                >
                  Bid
                </div>
              ) : props.owner.email === props.item.email ? (
                <div
                  onClick={() => props.endAuction(props.item.id)}
                  className="btn btn-outline-secondary"
                >
                  Cancel Auction
                </div>
              ) : (
                <div
                  onClick={() =>
                    props.bidAuction(props.item.id, props.item.curPrice)
                  }
                  className="btn btn-outline-secondary"
                >
                  Bid
                </div>
              )}
            </div>
            <p className="display-6">{props.item.curPrice} ₹</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};


export const AuctionCard = ({ item }) => {

  let expiredDate = item.duration;
  const { currentUser, bidAuction, endAuction } = useContext(AuthContext);

  return (
    
    <Countdown
      
      owner={currentUser}
      date={expiredDate}
      bidAuction={bidAuction}
      endAuction={endAuction}
      item={item}
      renderer={renderer}
    />
    
  );
};
