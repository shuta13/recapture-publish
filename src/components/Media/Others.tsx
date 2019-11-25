import React, { useEffect } from 'react';
import styled from 'styled-components';

const AppOthers = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  background: #ffffff;
  color: #303030;
  display: flex;
  margin: 40px 40px;
  font-family: 'Major Mono Display';
  font-size: 36px;

  justify-content: center;
  align-items: center;
`;

const Others: React.FC = () => {
  return <AppOthers>others</AppOthers>;
};

export default Others;
