import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas, Nav, Collapse } from 'react-bootstrap';
import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';
import { BsHouse } from 'react-icons/bs';


const StyledOffcanvas = styled(Offcanvas)`
  background-color: white; 
`;

const HeaderWithBackground = styled(Offcanvas.Header)`
  background-color:  #FFCD29; 
  height:54px
`;

const MenuTitle = styled(Link)`
  padding: 5px, 10px;
  color: black;
  font-weight:bold;
  font-size: 20px;
  text-align: center;
`;

const StyledNav = styled(Nav)`
   display:block;
  a {
    color: white;
    text-decoration: none;
    padding: 15px;
    font-size: 18px;
    
    transition: color 0.3s, border-bottom 0.3s, font-size 0.3s, box-shadow 0.3s;
    border-bottom: 3px solid transparent; /* Default underline */
  }

  a:hover {
    color: #ffcd29; 
    border-bottom: 3px solid #ffcd29; 
    font-weight:bold;
    font-size: 20px; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
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
      <StyledOffcanvas show={showSidebar} onHide={onHideSidebar} backdrop={false}>
        <HeaderWithBackground closeButton>
          <MenuTitle to="/landing"><BsHouse /></MenuTitle>
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
