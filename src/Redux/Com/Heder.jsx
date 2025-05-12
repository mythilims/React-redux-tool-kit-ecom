import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Badge, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../Slicer/AuthSlice';
import {clearCart} from '../Slicer/AddCardSlicer';
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
  const cartItems = useSelector(state => state.cardItem.cardDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Navbar color="dark" light expand="md" className="fixed-top">
      <NavbarBrand href="/" className="text-bg-dark">My Store</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/AddToCard">
            🛒 Cart
            <Badge color="warning" pill className="ml-2">
              {cartItems.length}
            </Badge>
          </NavLink>
        </NavItem>
        <NavItem>
          <Button
            onClick={() => {
              dispatch(logOut());
              dispatch(clearCart())
              navigate('/');
            }}
            color="warning"
            className="ms-3"
          >
            LogOut
          </Button>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default React.memo(NavigationBar);
