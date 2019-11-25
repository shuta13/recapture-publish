import React, { useEffect } from 'react';
import styled from 'styled-components';

const AppSocialMedia = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10px;
  font-family: 'Major Mono Display';
  font-size: 36px;
  text-align: center;

  background: #303030;
  color: #ffffff;
`


const SocialMedia: React.FC = () => {
  return <AppSocialMedia>social<br></br>media</AppSocialMedia>;
};

export default SocialMedia;
