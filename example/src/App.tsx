import React, { Component } from 'react';
import styled from 'styled-components';

// import { TestComponent } from './reactComponentLib';
import { PieChart } from './libs';

const PieChartWrapper = styled.div`
  padding: 10px;
  width: 300px;
  height: 300px;
`;

const data = [
  { title: 'Data 1', value: 100, color: '#22594e' },
  { title: 'Data 2', value: 60, color: '#2f7d6d' },
  { title: 'Data 3', value: 30, color: '#3da18d' },
  { title: 'Data 4', value: 20, color: '#69c2b0' },
  { title: 'Data 5', value: 10, color: '#a1d9ce' },
];
class App extends Component {
  render() {
    return (
      <div>
        <PieChartWrapper>
          <PieChart
            data={data}
            onPieHover={(d, i, e) => {
              if (d) {
                console.log('Mouse enter - Index:', i, 'Data:', d, 'Event:', e);
              } else {
                console.log('Mouse leave - Index:', i, 'Event:', e);
              }
            }}
          />
        </PieChartWrapper>
      </div>
    );
  }
}

export default App;
