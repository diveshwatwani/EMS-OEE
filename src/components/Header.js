import React, { useState } from 'react';
import styled from 'styled-components';
import { BsList } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import Sidebar from './Sidebar';
import logoutIcon from '../assets/logout.png';

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFCD29;
  color: white;
  padding: 5px; 
`;

const HeaderIcon = styled.div`
  font-size: 24px;
  filter: brightness(0); 
`;

const HeaderTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const HeaderEMS = styled.span`
  color: black;
`;

const IconImage = styled.img`
  width: 24px; 
  height: 24px; 
  margin: 0 5px;
`;

const menuItems = [
  {
    label: 'Factory 1',
    to: '/factory1',
    children: [
      {
        label: 'Shop 1',
        to: '/shop1',
        children: [
          {
            label: 'Line 1',
            to: '/line1',
            children: [
              {
                label: 'Workstation 1',
                to: '/workstation1',
                children: [
                  {
                    label: 'Equipment 1',
                    to: '/equipment1',
                  },
                  {
                    label: 'Equipment 2',
                    to: '/equipment2',
                  },
                ],
              },
              {
                label: 'Workstation 2',
                to: '/workstation2',
                children: [
                  {
                    label: 'Equipment 3',
                    to: '/equipment3',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Factory 2',
    to: '/factory2',
    children: [
      {
        label: 'Shop 2',
        to: '/shop2',
        children: [
          {
            label: 'Line 2',
            to: '/line2',
            children: [
              {
                label: 'Workstation 3',
                to: '/workstation3',
                children: [
                  {
                    label: 'Equipment 4',
                    to: '/equipment4',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div>
      <DashboardHeader>
        <HeaderIcon>
          <Button variant="link" className="menu" onClick={handleToggleSidebar}>
            <BsList size={30} />
          </Button>
        </HeaderIcon>
        <HeaderTitle>
          <HeaderEMS>Energy Monitoring System</HeaderEMS>
        </HeaderTitle>
        <HeaderIcon>
          <IconImage src={logoutIcon} alt="Logout" />
        </HeaderIcon>
      </DashboardHeader>
      <Sidebar showSidebar={showSidebar} onHideSidebar={handleCloseSidebar} menuItems={menuItems} />
    </div>
  );
}

export default Header;
