
import { AuthContext } from '../../context/AuthContext';
import React, { useContext, useRef, useState } from 'react';
import { Button, Form, Modal, Alert } from 'react-bootstrap';




const Profile = () => {

  const { currentUser, logout } = useContext(AuthContext);
  
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useContext(AuthContext);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const submitForm = async (e) => {
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

  };
  return (
    <>
    <div onClick={openForm} className="btn btn-outline-secondary mx-2">
        {currentUser.email}
      </div>
      <Modal centered show={showForm} onHide={closeForm}>
        <form onSubmit={submitForm}>
          <Modal.Header>
            <Modal.Title>Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control 
              type="email"
              ref={emailRef}
              required
              defaultValue={currentUser.email} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control 
              type="password"
              ref={passwordRef}
              placeholder="Leave blank to keep the same" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeForm}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default Profile