import { PieChartData } from '../../types/common'

export const transformPiesData = (
  data: Array<PieChartData>,
  expandOnHover: boolean,
  hoveredIndex: number
) => {
  const filteredData = data.filter(d => d.value > 0)

  if (filteredData.length) {
    return expandOnHover
      ? filteredData.map((item, index) => ({
        ...item,
        hovered: index === hoveredIndex,
      }))
      : filteredData
  }
  return filteredData
}

export const getPath = ({
  total,
  radius,
  value,
  center,
  decimals,
}: {
  total: number
  radius: number
  value: number
  center: number
  decimals: number
}) => {
  const radians = Number(
    (((value / total) * 360 * Math.PI) / 180).toFixed(decimals)
  )

  const x = (center + Math.sin(radians) * radius).toFixed(decimals)
  const y = (center - Math.cos(radians) * radius).toFixed(decimals)
  const la = radians > Math.PI ? 1 : 0

  const path = `
          M${center} ${center},
          L${center} ${center - radius},
          A${radius} ${radius},
          0 ${la} 1,
          ${x} ${y}Z`

  return path
}
