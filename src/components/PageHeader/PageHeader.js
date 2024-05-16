
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
        <h3 className="d-none d-sm-block">
          Welcome to the
          </h3>
          <h1 className="h1-seo">Neuroverse</h1>
          
        </div>
      </Container>
    </div>
  );
}
