import React from 'react';

import { LiveEdit } from '../components';
import theme from '../utils/theme';
import { PieChart } from '../libs';

const scope = { PieChart };

const PieChartComponent = `
sampleData = [
  { title: "Data 1", value: 100, color: "#4d8af0" },
  { title: "Data 2", value: 60, color: "#5f9cff" },
  { title: "Data 3", value: 30, color: "#71aeff" },
  { title: "Data 4", value: 20, color: "#83c0ff" },
  { title: "Data 5", value: 10, color: "#95d2ff" }
]

render(
  <PieChart
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
    onPieHover = {(data, index, event) => {
      if (data) {
        console.log("On Mouse Hover", { data, index, event });
      } else {
        console.log("On Mouse Leave:", { index, event });
      }
    }}
  />
)
`;

const Pie = () => <LiveEdit noInline code={PieChartComponent} scope={scope} theme={theme} />;

export default React.memo(Pie);
