import React from "react";
import { Nav } from 'react-bootstrap';


export const Navbar = () => {
  return (
    <Nav
      activeKey="/home"
    //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/">Directory</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/search">Search</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
