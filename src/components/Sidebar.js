import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas, Nav, Collapse } from 'react-bootstrap';
import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';

const StyledOffcanvas = styled(Offcanvas)`
  background-color: #555; /* Updated background color */
`;

const HeaderWithBackground = styled(Offcanvas.Header)`
  background-color: #444; /* Background color for the entire header */
`;

const MenuTitle = styled.div`
  padding: 5px, 10px;
  color: white;
  font-size: 25px;
  text-align: center;
`;

const StyledNav = styled(Nav)`
   display:block;
  a {
    color: white;
    text-decoration: none;
    padding: 15px;
    font-size: 20px;
    transition: color 0.3s, border-bottom 0.3s, font-size 0.3s, box-shadow 0.3s;
    border-bottom: 3px solid transparent; /* Default underline */
  }

  a:hover {
    color: #ffcd29; /* Text color on hover */
    border-bottom: 3px solid #ffcd29; /* Yellow underline on hover */
    font-size: 22px; /* Increased font size on hover */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Box shadow on hover */
  }
`;



const RecursiveNav = ({ items, handleToggleMenu, openMenus, level = 0 }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <Nav defaultActiveKey={items[0].to} className="flex-column">
      {items.map((item) => (
        <React.Fragment key={item.label}>
          <Nav.Link
            as={Link}
            to={item.to}
            className="text-dark"
            onClick={() => handleToggleMenu(item.label)}
            style={{ paddingLeft: `${level * 20}px` }}
          >
            {item.label}
            {item.children && (
              <span style={{ float: 'right' }}>
                <BsChevronDown style={{ transform: openMenus[item.label] ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </span>
            )}
          </Nav.Link>
          {item.children && (
            <Collapse in={openMenus[item.label]}>
              <div>
                <RecursiveNav items={item.children} handleToggleMenu={handleToggleMenu} openMenus={openMenus} level={level + 1} />
              </div>
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </Nav>
  );
};


const Sidebar = ({ showSidebar, onHideSidebar, menuItems }) => {
  const [openMenus, setOpenMenus] = useState({});

  const handleToggleMenu = (label) => {
    setOpenMenus((prevOpenMenus) => ({
      ...prevOpenMenus,
      [label]: !prevOpenMenus[label],
    }));
  };

  return (
    <div className="d-md-flex flex-md-column">
      <StyledOffcanvas show={showSidebar} onHide={onHideSidebar}>
        <HeaderWithBackground closeButton>
          <MenuTitle>Menu</MenuTitle>
        </HeaderWithBackground>
        <Offcanvas.Body>
          <StyledNav>
            <RecursiveNav items={menuItems} handleToggleMenu={handleToggleMenu} openMenus={openMenus} />
          </StyledNav>
        </Offcanvas.Body>
      </StyledOffcanvas>
    </div>
  );
};

export default Sidebar;

