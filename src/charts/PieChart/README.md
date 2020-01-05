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
  showTooltip: true
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

### Props

| Name                     | PropType         | Description                                                                                                           | Default    |
| ------------------------ | ---------------- | --------------------------------------------------------------------------------------------------------------------- | ---------- |
| data                     | Array of Objects | Array of {title: string, value: number(required), color: string}                                                     | []         |
| viewBoxSize              | Number           | SVG viewbox                                                                                                           | 100        |
| expandOnHover            | Boolean          | Flag of expand hovered Pie                                                                                                    | true       |
| expandSize               | Number           | Expand size for hovered Pie                                                                                           | 3          |
| strokeColor              | String           | Pie stroke color                                                                                                      | "#fff"     |
| strokeLinejoin           | String           | Pie stroke line join (One of `miter`, `round`, `bevel`, `inherit`)                                                    | "round"    |
| strokeWidth              | Number           | Pie stroke width                                                                                                      | 0          |
| transitionDuration       | String           | CSS property - `transition-duration`, set to `0s` to disable transition                                               | "0s"       |
| transitionTimingFunction | String           | CSS Property - `transition-timing-function`                                                                           | "ease-out" |
| onPieHover               | Function         | Callback when one pie is hovered or touched - e.g.: `(data, index, event) => {}`                                      | () => {}   |
| colorTone                | String           | It will generate lighten colors from the given color. (One of `blue`, `red`, `green`, `yellow`, `#<hash_color_code>`) | "blue"     |
| showTooltip              | Boolean          | Show tooltip on hovered Pie                                                                                           | true       |
| CustomTooltipTemplate    | ReactComponent   | For custom tooltip template on hovered Pie - e.g: `(data) => (<div>{data.title}</div>)`                               | true       |

## Screenshot

![Pei Chart](https://github.com/kaansey/svg-charts-react/blob/master/screenshots/pie-chart.png?raw=true 'Pie Chart')
