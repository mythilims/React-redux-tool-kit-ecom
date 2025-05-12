import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductList } from '../Slicer/ProductSlice';
import { Card, Row, Col, Button, CardBody } from 'reactstrap';
import { addCard } from '../Slicer/AddCardSlicer'

function CardList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.Product.list);

  useEffect(() => {
    dispatch(ProductList());
  }, [dispatch]);


  let productsList = useMemo(() => {
    return products;
  }, [products])
  return (
    <>
      <Row>

        {/* <Col md="3">

        </Col> */}

        <Col md="12">
          <Row>
            {productsList.map((item) => (
              <Col key={item.id} md="4" className="mb-4">
                <Card className="h-100 d-flex flex-column shadow-sm rounded">
                  <img
                    src={item.images[0]}
                    alt={item.category}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <CardBody className='card-body d-flex flex-column justify-content-xl-center'>
                    <h5 className="card-title">{item.category}</h5>
                    <p className="card-text">{item.description}</p>

                    <p><strong>Price: ${item.price}</strong></p>
                    <Button color="warning" style={{ borderRadius: '15px 15px 15px 15px' }} onClick={() => dispatch(addCard(item))}>Add Card</Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

    </>
  );
}

export default React.memo(CardList);
