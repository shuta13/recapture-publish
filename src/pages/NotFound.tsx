import React from 'react';
import styled from 'styled-components';

const NotFoundHead = styled.div`
  background-color: #1d1d1d;
  font-family: 'Noto Sans';
  font-size: 24px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFoundContent = styled.div`
  color: #fff;
  transition: color 0.4s;
  &:hover {
    color: #ccdfff;
  }
`;

const NotFound: React.FC = () => {
  return (
    <NotFoundHead>
      <NotFoundContent>not found</NotFoundContent>
    </NotFoundHead>
  );
};

export default NotFound;
