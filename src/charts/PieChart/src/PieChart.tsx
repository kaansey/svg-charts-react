import React, { useState, useCallback } from 'react'
import ReactTooltip from 'react-tooltip'

import Pies from './Pies'
import TooltipTemplate from './TooltipTemplate'
import { transformPiesData, assignPiesColor } from './utils'
import {
  TransitionTimingFunction,
  TransitionDuration,
  PieChartData,
  StrokeLinejoin,
  ColorTone,
  CustomTooltipTemplateProps,
} from '../../types/common'

interface PieChartProps {
  data: Array<PieChartData>
  viewBoxSize?: number
  expandOnHover?: boolean
  expandSize?: number
  shrinkOnTouchEnd?: boolean
  strokeColor?: string
  strokeLinejoin?: StrokeLinejoin
  strokeWidth?: number
  transitionDuration?: TransitionDuration
  transitionTimingFunction?: TransitionTimingFunction
  onPieHover?(data: PieChartData, index: number, e: EventTarget): void
  colorTone?: ColorTone
  showTooltip?: boolean
  CustomTooltipTemplate?: React.ComponentType<CustomTooltipTemplateProps>
}

const PieChart: React.FC<PieChartProps> = props => {
  const { data, viewBoxSize } = props

  const [hoveredIndex, setHoveredIndex] = useState()

  const center = props.viewBoxSize / 2
  const offset = props.expandOnHover ? props.expandSize : 0

  let piesData = transformPiesData(data, props.expandOnHover, hoveredIndex)

  if (props.colorTone) {
    piesData = assignPiesColor(piesData, props.colorTone)
  }

  const hanldePieHover = (
    piesData: PieChartData,
    index: number,
    e: EventTarget
  ) => {
    if (props.expandOnHover) {
      setHoveredIndex(index)
    }

    if (props.onPieHover) {
      props.onPieHover(piesData, index, e)
    }
  }

  const getTooltipContent = useCallback(() => {
    if (props.showTooltip && piesData[hoveredIndex]) {
      const pieDetail = piesData[hoveredIndex]
      const { CustomTooltipTemplate } = props
      return <CustomTooltipTemplate data={pieDetail} />
    }
    return null
  }, [hoveredIndex])

  return piesData && piesData.length > 0 ? (
    <>
      <svg
        data-tip=""
        data-for="tooltip"
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
      <ReactTooltip id="tooltip" getContent={getTooltipContent} />
    </>
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
  showTooltip: true,
  CustomTooltipTemplate: TooltipTemplate,
}

export default React.memo(PieChart)
