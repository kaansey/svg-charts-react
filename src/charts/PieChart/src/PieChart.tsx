import React, { useState } from 'react'
import Pies from './Pies'
import { transformPiesData } from './utils'
import {
  TransitionTimingFunction,
  TransitionDuration,
} from '../../types/transition'

interface PieChartProps {
  data: Array<any>
  viewBoxSize?: number
  expandOnHover?: boolean
  expandSize?: number
  shrinkOnTouchEnd?: boolean
  strokeColor?: string
  strokeLinejoin?: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round'
  strokeWidth?: number
  transitionDuration?: TransitionDuration
  transitionTimingFunction?: TransitionTimingFunction
  onPieHover?(data: Array<any>, index: number, e: any): void
}

const PieChart: React.SFC<PieChartProps> = props => {
  const { data, viewBoxSize } = props

  const [hoveredIndex, setHoveredIndex] = useState()

  const hanldePieHover = (data: any, index: any, e: any) => {
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
          {...props}
          center={center}
          data={piesData}
          onHover={hanldePieHover}
        />
      </g>
    </svg>
  ) : null
}

PieChart.defaultProps = {
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
}

export default PieChart
