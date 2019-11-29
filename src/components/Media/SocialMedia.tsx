import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WrapSocialMedia = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  margin: 10px 10px;

  overflow: hidden;
`;

const CommonChildSocialMedia = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Major Mono Display';
  font-size: 36px;
  text-align: center;
`;

const TextChildSocialMedia = styled(CommonChildSocialMedia)`
  background: #303030;
  color: #ffffff;
`;

const IconChildSocialMedia = styled(CommonChildSocialMedia)`
  background: #ffffff;
  color: #ffffff;
`;

const WrapIcon = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  overflow: hidden;
  background: #303030;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin: 0 8px;
`

const SocialMedia: React.FC = () => {
  const [isShowIcon, setIsShowIcon] = useState(false);
  const ParentSocialMedia = styled.div`
    width: 480px;
    height: 240px;
    background: red;

    display: flex;
    transition: all ease-in-out .4s;
    transform: ${isShowIcon ? 'translateX(-50%)' : 'translateX(0%)'};
  `;
  return (
    <WrapSocialMedia>
      <ParentSocialMedia>
        <TextChildSocialMedia onClick={() => setIsShowIcon(true)}>
          social<br></br>media
        </TextChildSocialMedia>
        <IconChildSocialMedia onClick={() => setIsShowIcon(false)}>
          <WrapIcon>
            <FontAwesomeIcon icon={['fab', 'twitter']}></FontAwesomeIcon>
          </WrapIcon>
          <WrapIcon>
            <FontAwesomeIcon icon={['fab', 'facebook-f']}></FontAwesomeIcon>
          </WrapIcon>
          <WrapIcon>
            <FontAwesomeIcon icon={['fab', 'instagram']}></FontAwesomeIcon>
          </WrapIcon>
        </IconChildSocialMedia>
      </ParentSocialMedia>
    </WrapSocialMedia>
  );
};

export default SocialMedia;
