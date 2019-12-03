import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Transition } from 'react-transition-group';

import { CommonWrapMedia, CommonChildMedia, CommonWrapIcon } from './common/MediaStyle';

const ParentSocialMedia = styled.div`
  width: 480px;
  height: 240px;
  display: flex;
`;

const TextChildSocialMedia = styled(CommonChildMedia)`
  background: #303030;
  color: #ffffff;
`;

const IconChildSocialMedia = styled(CommonChildMedia)`
  background: #ffffff;
  color: #ffffff;
`;

const WrapIcon = styled(CommonWrapIcon)`
  background: #303030;
  color: #ffffff;
`;

const SocialMedia: React.FC = () => {
  const [isShowIcon, setIsShowIcon] = useState(false);
  const defaultStyle = {
    transition: `transform cubic-bezier(.51,-0.05,.44,1.07) 600ms`,
    transform: `translateX(0%)`
  }
  const transitedStyle: { [key: string]: { [key: string]: string } } = {
    entered: { transform: `translateX(-100%)` }
  }
  return (
    <CommonWrapMedia>
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
                  <WrapIcon href="https://twitter.com/did0es" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'twitter']}></FontAwesomeIcon>
                  </WrapIcon>
                  <WrapIcon href="https://www.facebook.com/profile.php?id=100028982675881" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'facebook-f']}></FontAwesomeIcon>
                  </WrapIcon>
                  <WrapIcon href="https://soundcloud.com/user-858183512" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'soundcloud']}></FontAwesomeIcon>
                  </WrapIcon>
                </IconChildSocialMedia>
              </ParentSocialMedia>
            </div>
          )}
        </Transition>
    </CommonWrapMedia>
  );
};

export default SocialMedia;
