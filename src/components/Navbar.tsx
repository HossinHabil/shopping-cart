import React from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar: React.FC = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs className="bg-white shadow-sm mb-3" sticky="top">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            variant="outline-primary"
            style={{
              width: "3rem",
              height: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
            className="rounded-circle"
            onClick={openCart}
          >
            <SlBasket style={{ width: "3rem", height: "3rem" }} />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                right: 0,
                bottom: 0,
                transform: "translate(35%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
