import React from 'react';
import styled from 'styled-components';

import ScrollHorizontal from 'react-scroll-horizontal';

const WrapWorks = styled.div`
  height: 30em;
  background: #1d1d1d;
  display: flex;
  align-items: center;
`;

const WorksItem = styled.div`
  width: 500px;
  height: 480px;
  background: gray;
  margin: 0 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
`;

const PCWorks: React.FC = () => {
  const parent = { margin: `15em 0` };
  return (
    <WrapWorks style={parent}>
      <ScrollHorizontal reverseScroll={true}>
        <WorksItem>coming soon</WorksItem>
        <WorksItem>coming soon</WorksItem>
        <WorksItem>coming soon</WorksItem>
        <WorksItem>coming soon</WorksItem>
        <WorksItem>coming soon</WorksItem>
        <WorksItem>coming soon</WorksItem>
        <WorksItem>coming soon</WorksItem>
        <WorksItem>coming soon</WorksItem>
      </ScrollHorizontal>
    </WrapWorks>
  );
}

export default PCWorks;