import React from 'react'

import { CustomTooltipTemplateProps } from '../../types/common'

const tooltipTemplate: React.FC<CustomTooltipTemplateProps> = props => {
  return (
    <div>
      {props.data.title}: <b>{props.data.percentage}%</b>
    </div>
  )
}

export default React.memo(tooltipTemplate)
