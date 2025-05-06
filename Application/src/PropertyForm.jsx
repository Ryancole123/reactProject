import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';


function PropertyModalForm({ show, handleClose, onPropertyAdded }) {
  const navigate = useNavigate();
  const [sellers, setSellers] = useState([]);

  const [form, setForm] = useState({
    address: '',
    postcode: '',
    type: 'DETACHED',
    price: '',
    bedroom: '',
    bathroom: '',
    garden: 'Yes',
    seller: '',
    buyer: '',
    status: 'FOR SALE',
  });

  useEffect(() => {
    fetch("http://localhost:3000/seller")
      .then((res) => res.json())
      .then((data) => setSellers(data));
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
  };

  const postToJSON = () => {
    const gardenValue = form.garden === "Yes" ? 1 : 0;
  
    const data = {
      ...form,
      price: parseInt(form.price),
      bedroom: parseInt(form.bedroom),
      bathroom: parseInt(form.bathroom),
      garden: gardenValue,
      sellerId: form.seller,
    };

    
    fetch("http://localhost:3000/property", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.ok) {
            if (onPropertyAdded) {
              onPropertyAdded(); 
            }
            setForm({
                address: '',
                postcode: '',
                type: 'DETACHED',
                price: '',
                bedroom: '',
                bathroom: '',
                garden: 'Yes',
                seller: '',
                buyer: '',
                status: 'FOR SALE',
              });
            handleClose();      
            navigate("/properties");
          } else {
            console.error("Failed to add property");
          }
        })
        .catch((err) => console.error("Error:", err));
      
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Property</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control id="address" value={form.address} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Postcode</Form.Label>
            <Form.Control id="postcode" value={form.postcode} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Type</Form.Label>
            <Form.Select id="type" value={form.type} onChange={handleChange}>
              <option value="DETACHED">DETACHED</option>
              <option value="SEMI-DETACHED">SEMI-DETACHED</option>
              <option value="APARTMENT">APARTMENT</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control id="price" type="number" value={form.price} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Bedroom</Form.Label>
            <Form.Control id="bedroom" type="number" value={form.bedroom} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Bathroom</Form.Label>
            <Form.Control id="bathroom" type="number" value={form.bathroom} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Garden</Form.Label>
            <Form.Select id="garden" value={form.garden} onChange={handleChange}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Seller</Form.Label>
            <Form.Select id="seller" value={form.seller} onChange={handleChange}>
              {sellers.map((s) => (
                <option key={s.id} value={s.id}>{`${s.firstName} ${s.surname}`}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Buyer</Form.Label>
            <Form.Control id="buyer" value={form.buyer} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Select id="status" value={form.status} onChange={handleChange}>
              <option value="FOR SALE">FOR SALE</option>
              <option value="SOLD">SOLD</option>
              <option value="WITHDRAWN">WITHDRAWN</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="primary" onClick={postToJSON}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PropertyModalForm;
