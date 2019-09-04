import React, { type Node } from 'react';
import styled from 'styled-components';

type Props = {
  children: Node
};

const CentralBlock = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  float: none;
  clear: none;
  border: 1px none #000;
  text-align: left;
`;

export default ({ children }: Props) => (
  <CentralBlock>
    {children}
  </CentralBlock>
);
