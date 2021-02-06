import React from "react";
import { Nav } from 'react-bootstrap';


export const Navbar = () => {
  return (
    <Nav
      activeKey="/"
    //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/sort">Directory</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/HW-14-Axios-Employee">Search</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
