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
  background: #ffffff;
  color: #303030;
`;

const IconChildSocialMedia = styled(CommonChildMedia)`
  background: #303030;
  color: #303030;
`;

const WrapIcon = styled(CommonWrapIcon)`
  background: #ffffff;
`;

const Others: React.FC = () => {
  const [isShowIcon, setIsShowIcon] = useState(false);
  const defaultStyle = {
    transition: `transform ease-in-out 400ms`,
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
                  others
                </TextChildSocialMedia>
                <IconChildSocialMedia onClick={() => setIsShowIcon(!isShowIcon)}>
                  <WrapIcon>
                    <FontAwesomeIcon icon={['fab', 'github-square']}></FontAwesomeIcon>
                  </WrapIcon>
                  <WrapIcon>
                    <FontAwesomeIcon icon={['fas', 'at']}></FontAwesomeIcon>
                  </WrapIcon>
                  <WrapIcon>
                    <FontAwesomeIcon icon={['fas', 'blog']}></FontAwesomeIcon>
                  </WrapIcon>
                </IconChildSocialMedia>
              </ParentSocialMedia>
            </div>
          )}
        </Transition>
    </CommonWrapMedia>
  );
};

export default Others;
