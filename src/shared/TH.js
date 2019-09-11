import React from 'react'
import { rowStyling } from '../constants'

const TH = ({ style = rowStyling, children, ...props }) => (
	<th style={style} {...props}>
		{children}
	</th>
)

export default TH
