import React from 'react';
import styled from 'styled-components';

const baseZIndex = 0;

const WrapGrid = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;
const GridOuter = styled.div`
  position: relative;
  display: inline-block;
  padding: 4vh 2vw;

  &:before,
  &:after {
    position: absolute;
    top: -2px;
    left: -2px;
    z-index: 2;
    content: '';
    width: 0;
    height: 0;
    border: 2px solid transparent;
  }
  &:hover {
    color: ${props => props.color};
  }
  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
  }
  &:hover::before {
    border-top-color: ${props => props.color};
    border-right-color: ${props => props.color};
    transition: width .3s, height .3s .3s;
  }
  &:hover::after {
    border-bottom-color: ${props => props.color};
    border-left-color: ${props => props.color};
    transition: height .3s, width .3s .3s;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: ${baseZIndex};

  /* border: solid 2px ${props => props.color}; */
`;
const GridInner = styled.div`
  position: relative;
  display: inline-block;
  padding: 44vh 46vw;

  &:before,
  &:after {
    position: absolute;
    top: -2px;
    left: -2px;
    z-index: 2;
    content: '';
    width: 0;
    height: 0;
    border: 2px solid transparent;
  }
  &:hover {
    color: ${props => props.color};
  }
  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
  }
  &:hover::before {
    border-top-color: ${props => props.color};
    border-right-color: ${props => props.color};
    transition: width 0.3s, height 0.3s 0.3s;
  }
  &:hover::after {
    border-bottom-color: ${props => props.color};
    border-left-color: ${props => props.color};
    transition: height 0.3s, width 0.3s 0.3s;
  }

  z-index: ${baseZIndex + 999999};
`;

const Grid: React.FC<{ color: string }> = ({ color }) => {
  return (
    <WrapGrid color={color}>
      <GridOuter color={color}>
        <GridInner color={color}></GridInner>
      </GridOuter>
    </WrapGrid>
  );
};

export default Grid;
