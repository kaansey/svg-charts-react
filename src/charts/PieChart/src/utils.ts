import { PieChartData, ColorTone } from '../../types/common'
import { COLORS, DECIMALS, PERCENTAGE_VALUE } from '../../constants'

export const transformPiesData = (
  data: Array<PieChartData>,
  expandOnHover: boolean,
  hoveredIndex: number
) => {
  const filteredData = data
    .filter(d => d.value > 0)
    .sort((a, b) => b.value - a.value)

  const total = data.reduce(
    (prev: number, current: PieChartData) => current.value + prev,
    0
  )

  if (filteredData.length) {
    return expandOnHover
      ? filteredData.map((item, index) => {
        const percentage = (
          Number(
            (((item.value / total) * 360 * Math.PI) / 180).toFixed(DECIMALS)
          ) * PERCENTAGE_VALUE
        ).toFixed(2)

        return {
          ...item,
          hovered: index === hoveredIndex,
          percentage,
        }
      })
      : filteredData
  }
  return filteredData
}

export const getPath = ({
  total,
  radius,
  value,
  center,
}: {
  total: number
  radius: number
  value: number
  center: number
}) => {
  const radians = Number(
    (((value / total) * 360 * Math.PI) / 180).toFixed(DECIMALS)
  )

  const x = (center + Math.sin(radians) * radius).toFixed(DECIMALS)
  const y = (center - Math.cos(radians) * radius).toFixed(DECIMALS)
  const la = radians > Math.PI ? 1 : 0

  const path = `
          M${center} ${center},
          L${center} ${center - radius},
          A${radius} ${radius},
          0 ${la} 1,
          ${x} ${y}Z`

  return path
}

const colorToHex = (color: string) => {
  color = color.toUpperCase()
  return color in COLORS ? COLORS[color] : COLORS.BLUE
}

const lightenColor = (color: string, percent: number) => {
  const num = parseInt(color.replace('#', ''), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = ((num >> 8) & 0x00ff) + amt,
    G = (num & 0x0000ff) + amt
  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
      (G < 255 ? (G < 1 ? 0 : G) : 255)
    )
      .toString(16)
      .slice(1)
  )
}

export const assignPiesColor = (
  data: Array<PieChartData>,
  { color, diffPercentage = 3 }: ColorTone
): Array<PieChartData> => {
  let colorTone = color.startsWith('#') ? color : colorToHex(color)

  const firstPie = data[0]

  if (!firstPie.color) {
    firstPie.color = colorTone
    colorTone = lightenColor(colorTone, diffPercentage)
  }

  for (let i = 1; i < data.length; i++) {
    if (!data[i].color) {
      data[i].color = colorTone
      colorTone = lightenColor(colorTone, diffPercentage)
    }
  }

  return data
}
