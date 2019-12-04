import React from 'react';
import styled from 'styled-components';


const Video = styled.iframe`
  max-width: 80vw;
  max-height: 80vh;
  border: none;
  @media (max-width: 991px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    margin-right: 100px;
    margin-left: 100px;
  }
  @media (max-width: 479px) {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export default () => (
  <Video
    title='live'
    src='https://embed.restream.io/player/index.html?token=2512d6be3a260e441bd661954a922ff8'
    width='960'
    height='576'
    frameborder='0'
    allowfullscreen
  />
);
