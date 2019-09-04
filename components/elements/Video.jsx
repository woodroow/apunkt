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
    src='//vk.com/video_ext.php?oid=-22186156&id=456239617&hash=dfc9ce404aae4243&hd=1'
    width='640'
    height='360'
    frameborder='0'
    allowfullscreen
  />
);