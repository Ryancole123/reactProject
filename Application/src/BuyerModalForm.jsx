import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

let BuyerModalForm = ({show, handleClose, onBuyerAdded}) => {

    const [form, setForm] = useState({
        firstName: "",
        surname: "",
        address: "",
        postcode: "",
        phone: ""
    });


    function handleChange(e){
        const {id, value} = e.target;
        setForm(prev => ({...prev, [id]:value}))
    }


    async function postToJSON(){
        await fetch("http://localhost:3000/buyer",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(form)
        })

        setForm({       
            firstName: "",
            surname: "",
            address: "",
            postcode: "",
            phone: ""})
        

        if(onBuyerAdded){
            onBuyerAdded();
        }

        handleClose()


    }

    return(
        <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Seller</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control id='firstName' value={form.firstName} onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Surname</Form.Label>
                <Form.Control id='surname' value={form.surname} onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control id='address' value={form.address} onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Postcode</Form.Label>
                <Form.Control id='postcode' value={form.postcode} onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone number</Form.Label>
                <Form.Control id='phone' value={form.phone} onChange={handleChange}></Form.Control>
            </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                <Button variant="primary" onClick={postToJSON}>Submit</Button>
            </Modal.Footer>


      </Modal>
    )

}

export default BuyerModalForm