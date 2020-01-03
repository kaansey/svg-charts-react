import React from 'react'

import { getPath } from './utils'
import {
  TransitionTimingFunction,
  TransitionDuration,
  PieChartData,
} from '../../types/common'

const decimals = 4
let offset = 0

interface PiesPorps {
  center: number
  data: Array<PieChartData>
  onHover(data: PieChartData, index: number, e: any): void
  expandSize?: number
  strokeColor?: string
  strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit'
  strokeWidth?: number
  transitionDuration?: TransitionDuration
  transitionTimingFunction?: TransitionTimingFunction
}

const Pies: React.FC<PiesPorps> = ({
  center,
  data,
  onHover,
  expandSize,
  strokeWidth,
  strokeColor,
  strokeLinejoin,
  transitionTimingFunction,
  transitionDuration,
}): any => {
  const total = data.reduce(
    (prev: number, current: PieChartData) => current.value + prev,
    0
  )

  const handleOnHover = (d: PieChartData, index: number) => (e: any) => {
    onHover(d, index, e)
  }

  if (total < 1) {
    return null
  }

  return data.map((d: PieChartData, index: number) => {
    const radius = center + (d.hovered ? expandSize : 0) - strokeWidth / 2

    const path = getPath({
      total,
      radius,
      value: d.value,
      center,
      decimals,
    })

    const currentOffset = ((offset / total) * 360).toFixed(decimals)
    offset += d.value

    const isSinglePie = data.length === 1

    return (
      <g
        key={'pie' + index}
        transform={`rotate(${currentOffset}, ${center}, ${center})`}
      >
        {isSinglePie ? ( // single pie
          <circle cx={center} cy={center} r={radius} fill={d.color} />
        ) : (
          <path
            d={path}
            fill={d.color}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinejoin={strokeLinejoin}
            onMouseEnter={handleOnHover(d, index)}
            onMouseLeave={handleOnHover(null, null)}
            onTouchStart={handleOnHover(d, index)}
            onTouchEnd={handleOnHover(null, null)}
            style={{
              transitionProperty: 'all',
              transitionTimingFunction: transitionTimingFunction,
              transitionDuration: transitionDuration,
            }}
          >
            {d.title && <title>{d.title}</title>}
          </path>
        )}
      </g>
    )
  })
}

export default Pies
