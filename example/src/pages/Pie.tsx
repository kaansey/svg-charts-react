import React from 'react';
import styled from 'styled-components';

import { LiveEdit } from '../components';
import theme from '../utils/theme';
import { PieChart } from '../libs';

const Wrapper = styled.div`
  width: 300px;
  margin: auto;
  padding: 10px;
`;

const scope = { PieChart, Wrapper };

const PieChartComponent = `
    sampleData = [
      { title: "Pie 1", value: 100 },
      { title: "Pie 2", value: 60 },
      { title: "Pie 5", value: 10, color: "#add8e6" },
      { title: "Pie 3", value: 30 },
      { title: "Pie 4", value: 20 }
    ]
    
    render(
      <Wrapper>
        <PieChart
          key={"pie-1"}
          data = {sampleData}
          viewBoxSize = {100}
          expandOnHover = {true}
          expandSize = {3}
          shrinkOnTouchEnd = {false}
          strokeColor = {'#eee'}
          strokeLinejoin = {'round'}
          strokeWidth = {0}
          transitionDuration = {'0s'}
          transitionTimingFunction = {'ease-out'}
          // color can be "blue", "red", "green", "yellow" or any hex color
          colorTone = {{color:'red', diffPercentage: 4 }}
          onPieHover = {(data, index, event) => {
            if (data) {
              console.log("On Mouse Hover", { data, index, event });
            } else {
              console.log("On Mouse Leave:", { index, event });
            }
          }}
        />
      </Wrapper>
    )
`;

const PieChartWithColor = `
sampleData = [
  { title: "Pie 1", value: 100, color: "#4d8af0" },
  { title: "Pie 2", value: 60, color: "#5f9cff" },
  { title: "Pie 3", value: 30, color: "#71aeff" },
  { title: "Pie 4", value: 20, color: "#83c0ff" },
  { title: "Pie 5", value: 10, color: "#95d2ff" }
]

render(
  <Wrapper>
    <PieChart
      key={"pie-2"}
      data = {sampleData}
    />
  </Wrapper>
)
`;

const Pie = () => {
  return (
    <>
      <h3>Sample with color tone</h3>
      <p>
        The <b>colorTone</b> property will generate lighten colors from the given color. The lighten level of the color
        configurable by the <b>diffPercentage</b> property.
      </p>
      <p>
        Auto-generated colors can be overwriten by <b>color</b> property in your sample data.
      </p>
      <p>
        This is the example how you can use the <b>colorTone</b> and how you can overwrite for spesific data
      </p>
      <LiveEdit noInline code={PieChartComponent} scope={scope} theme={theme} />
      <h3>Sample with specific colors</h3>
      <LiveEdit noInline code={PieChartWithColor} scope={scope} theme={theme} />;
    </>
  );
};

export default Pie;
