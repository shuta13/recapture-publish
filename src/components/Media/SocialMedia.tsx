import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Transition } from 'react-transition-group';

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
  cursor: pointer;
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
  const defaultStyle = {
    transition: `transform ease-in-out 400ms`,
    transform: `translateX(0%)`
  }
  const transitedStyle: { [key: string]: { [key: string]: string } } = {
    entered: { transform: `translateX(-100%)` }
  }
  const ParentSocialMedia = styled.div`
    width: 480px;
    height: 240px;

    display: flex;
  `;
  return (
    <WrapSocialMedia>
        <Transition in={isShowIcon} timeout={0}>
          {state => (
            <div
              style={{
                ...defaultStyle,
                ...transitedStyle[state]
              }}
            >
              <ParentSocialMedia>
                <TextChildSocialMedia onClick={() => setIsShowIcon(!isShowIcon)}>
                  social<br></br>media
                </TextChildSocialMedia>
                <IconChildSocialMedia onClick={() => setIsShowIcon(!isShowIcon)}>
                  <WrapIcon>
                    <FontAwesomeIcon icon={['fab', 'twitter']}></FontAwesomeIcon>
                  </WrapIcon>
                  <WrapIcon>
                    <FontAwesomeIcon icon={['fab', 'facebook-f']}></FontAwesomeIcon>
                  </WrapIcon>
                  <WrapIcon>
                    <FontAwesomeIcon icon={['fab', 'soundcloud']}></FontAwesomeIcon>
                  </WrapIcon>
                </IconChildSocialMedia>
              </ParentSocialMedia>
            </div>
          )}
        </Transition>
    </WrapSocialMedia>
  );
};

export default SocialMedia;
