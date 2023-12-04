import { Button, Form, Modal, Alert, Row, Col } from 'react-bootstrap';
import React, { useContext, useRef, useState } from 'react';
import Popup from 'reactjs-popup';
import { AuthContext } from '../../context/AuthContext';

export const edit = () => {
    const editPrice = () => {};
   const closeprice = () => {};

  return (
        <div>
            <h4>Popup - GeeksforGeeks</h4>
            <Popup trigger=
                {<button> Click to open popup </button>}
                position="right center">
                <div>GeeksforGeeks</div>
                <button>Click here</button>
            </Popup>
        </div>
  )
};

