export type PieChartData = {
  title?: string
  value: number
  color?: string
  hovered?: boolean
}

export type TransitionDuration = string
export type TransitionTimingFunction =
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'linear'
  | 'step-start'
  | 'step-end'

export type StrokeLinejoin = 'miter' | 'round' | 'bevel' | 'inherit'

export type ColorTone = {
  color: 'blue' | 'red' | 'green' | 'yellow' | string
  diffPercentage?: number
}
