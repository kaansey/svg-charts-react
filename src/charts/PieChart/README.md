# Pie Chart

### Default values
```js
  viewBoxSize: 100,
  expandOnHover: true,
  expandSize: 3,
  onPieHover: () => null,
  shrinkOnTouchEnd: false,
  strokeColor: '#fff',
  strokeLinejoin: 'round',
  strokeWidth: 0,
  transitionDuration: '0s',
  transitionTimingFunction: 'ease-out',
```

### How to use
```js
import { PieChart } from 'svg-charts-react'

const data = [
  { title: 'Pie 1', value: 100, color: '#4d8af0' },
  { title: 'Pie 2', value: 70, color: '#5f9cff' },
  { title: 'Pie 3', value: 40, color: '#71aeff' },
  { title: 'Pie 4', value: 25, color: '#83c0ff' },
  { title: 'Pie 5', value: 10, color: '#95d2ff' },
]

<PieChart
    data={data}
    onPieHover={(data, index, event) => {
        if (data) {
        console.log('On Mouse Hover', { data, index, event });
        } else {
        console.log('On Mouse Leave:', { index, event });
        }
    }}
/>
```

## Screenshot
![Pei Chart](https://github.com/kaansey/svg-charts-react/blob/master/screenshots/pie-chart.png?raw=true "Pie Chart")
