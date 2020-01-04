import { PieChartData, ColorTone } from '../../types/common'

export const transformPiesData = (
  data: Array<PieChartData>,
  expandOnHover: boolean,
  hoveredIndex: number
) => {
  const filteredData = data
    .filter(d => d.value > 0)
    .sort((a, b) => b.value - a.value)

  console.log(filteredData)

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

const colorToHex = (color: string) => {
  const staticColors: any = {
    blue: '#4d8af0',
    red: '#cc3333',
    green: '#2e8f59',
    yellow: '#a3a328',
  }

  return color in staticColors ? staticColors[color] : staticColors.blue
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
