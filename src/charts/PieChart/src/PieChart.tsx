import React, { useState } from 'react'
import Pies from './Pies'
import { transformPiesData } from './utils'
import {
  TransitionTimingFunction,
  TransitionDuration,
  PieChartData,
} from '../../types/common'

interface PieChartProps {
  data: Array<PieChartData>
  viewBoxSize?: number
  expandOnHover?: boolean
  expandSize?: number
  shrinkOnTouchEnd?: boolean
  strokeColor?: string
  strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit'
  strokeWidth?: number
  transitionDuration?: TransitionDuration
  transitionTimingFunction?: TransitionTimingFunction
  onPieHover?(data: PieChartData, index: number, e: EventTarget): void
}

const PieChart: React.FC<PieChartProps> = props => {
  const { data, viewBoxSize } = props

  const [hoveredIndex, setHoveredIndex] = useState()

  const hanldePieHover = (
    data: PieChartData,
    index: number,
    e: EventTarget
  ) => {
    if (props.expandOnHover) {
      setHoveredIndex(index)
    }

    if (props.onPieHover) {
      props.onPieHover(data, index, e)
    }
  }

  const center = props.viewBoxSize / 2
  const offset = props.expandOnHover ? props.expandSize : 0

  const piesData = transformPiesData(data, props.expandOnHover, hoveredIndex)

  return piesData && piesData.length > 0 ? (
    <svg
      viewBox={`0 0 ${viewBoxSize + offset * 2} ${viewBoxSize + offset * 2}`}
    >
      <g transform={`translate(${offset}, ${offset})`}>
        <Pies
          center={center}
          data={piesData}
          onHover={hanldePieHover}
          expandSize={props.expandSize}
          strokeColor={props.strokeColor}
          strokeLinejoin={props.strokeLinejoin}
          strokeWidth={props.strokeWidth}
          transitionDuration={props.transitionDuration}
          transitionTimingFunction={props.transitionTimingFunction}
        />
      </g>
    </svg>
  ) : null
}

PieChart.defaultProps = {
  viewBoxSize: 100,
  expandOnHover: true,
  expandSize: 3,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onPieHover: () => {},
  shrinkOnTouchEnd: false,
  strokeColor: '#fff',
  strokeLinejoin: 'round',
  strokeWidth: 0,
  transitionDuration: '0s',
  transitionTimingFunction: 'ease-out',
}

export default PieChart
