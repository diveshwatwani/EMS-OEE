import React from 'react';
import styled from 'styled-components';
import menuIcon from '../assets/menu.png';
import logoutIcon from '../assets/logout.png';

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFCD29;
  color: white;
  padding: 10px 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const HeaderIcon = styled.div`
  font-size: 24px;
`;

const HeaderTitle = styled.div`
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const HeaderEMS = styled.span`
  color: black;
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 5px;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

function Header() {
  return (
    <DashboardHeader>
      <HeaderIcon>
        <IconImage src={menuIcon} alt="Menu Icon" />
      </HeaderIcon>
      <HeaderTitle>
        <HeaderEMS>Energy Monitoring System</HeaderEMS>
      </HeaderTitle>
      <HeaderIcon>
        <IconImage src={logoutIcon} alt="Menu Icon" />
      </HeaderIcon>
    </DashboardHeader>
  );
}

export default Header;
