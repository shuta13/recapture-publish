import React from 'react';
import styled from 'styled-components';

const AppWorks = styled.div`
  width: 100vw;
  height: 100vh;
  background: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

const PhoneWorks: React.FC = () => {
  return (
    <AppWorks>
      works for phone is coming soon
    </AppWorks>
  );
};

export default PhoneWorks;
