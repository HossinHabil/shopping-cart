import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import dataItems from "../data/items.json";

const Store: React.FC = () => {
  return (
    <>
      <div>Store</div>
      <Row xs={1} md={2} lg={3} className="g-3">
        {dataItems.map((item) => (
          <Col key={item.id} height="200px">
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
