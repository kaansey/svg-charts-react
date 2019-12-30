import React from 'react';
import styled from 'styled-components';

import { PieChart } from './libs';

const PieWrapperDiv = styled.div`
  width: 300px;
  height: 300px;
`;

const sampleData = [
  { title: 'Data 1', value: 100, color: '#4d8af0' },
  { title: 'Data 2', value: 60, color: '#5f9cff' },
  { title: 'Data 3', value: 30, color: '#71aeff' },
  { title: 'Data 4', value: 20, color: '#83c0ff' },
  { title: 'Data 5', value: 10, color: '#95d2ff' },
];

const App = () => {
  return (
    <PieWrapperDiv>
      <h3>Pie chart sample</h3>
      <PieChart
        data={sampleData}
        onPieHover={(data, index, event) => {
          if (data) {
            console.log('On Mouse Hover', { data, index, event });
          } else {
            console.log('On Mouse Leave:', { index, event });
          }
        }}
      />
    </PieWrapperDiv>
  );
};

export default App;
