import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { Row, Col, Card, CardBody, Button, Label } from 'reactstrap';
import { removeFromCart } from '../Slicer/AddCardSlicer';
import { useCallback } from 'react';
import Heder from './Heder';

function AddToCard() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cardItem.cardDetails);
  const handleRemove = useCallback((id) => {
    dispatch(removeFromCart(id));
  }, [dispatch]);

  return (
    <div className="p-4">
      <Heder />
      <h3 className="mb-4">🛒 Your Cart</h3>
      {cartItems.length === 0 ? (
        <div>
          <p>No items in cart.</p>
          <Button color="primary" href="/">Go Back to Store</Button>
        </div>
      ) : (
        <Row>
          {cartItems.map((item) => (
            <Col md="6" key={item.id ? item.id : `${item.category}-${item.price}`} className="mb-4">
              <Card className="shadow-sm">
                <Row noGutters>
                  <Col md="4">
                    <img
                      src={item.images[0] || '/path/to/default-image.jpg'}
                      alt={item.category}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Col>
                  <Col md="8">

                    <CardBody>

                      <h5>{item.category}</h5>
                      <p>${item.price}</p>

                      <div className='d-flex'>
                        <Button
                          color="danger"
                          size="sm"
                          onClick={() => handleRemove(item.id)} // Remove item from cart
                        >
                          Remove

                        </Button>
                        <div>
                          <Button>+</Button> <Label>1</Label><Button>-</Button></div>
                      </div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default React.memo(AddToCard);
