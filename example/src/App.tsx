import React from 'react';
import ReactDemoPage from 'react-demo-page';
import pkg from '../package.json';

// import { TestComponent } from './reactComponentLib';
import { PieChart } from './libs';

const sampleData = [
  { title: 'Data 1', value: 100, color: '#4d8af0' },
  { title: 'Data 2', value: 60, color: '#5f9cff' },
  { title: 'Data 3', value: 30, color: '#71aeff' },
  { title: 'Data 4', value: 20, color: '#83c0ff' },
  { title: 'Data 5', value: 10, color: '#95d2ff' },
];

const routes = [
  {
    path: '/',
    demo: {
      component: (
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
      ),
      hiddenProps: ['data', 'onPieHover'],
      // html: html,
    },
    label: 'Demo',
  },
];

const header = {
  title: 'SVG Charts React',
  buttons: [
    { label: 'Github', url: pkg.repo },
    { label: 'Npm', url: `https://www.npmjs.com/package/${pkg.name}` },
  ],
};

const footer = {
  author: pkg.author,
};

const App = () => <ReactDemoPage basename={pkg.name} header={header} footer={footer} pages={routes} color="#3498db" />;

export default App;
