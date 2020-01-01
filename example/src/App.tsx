import React from 'react';
import styled from 'styled-components';

import { Header, Menu } from './components';
import { Pie } from './pages';

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 840px;
  margin: auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PageDiv = styled.div`
  border-left: 1px solid #edf2f7;
  padding-left: 15px;
  width: 100%;
`;

const App = () => {
  return (
    <>
      <Header />
      <ContentDiv>
        <Menu />
        <PageDiv>
          <Pie />
        </PageDiv>
      </ContentDiv>
    </>
  );
};

export default App;
