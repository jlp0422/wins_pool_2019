import React from 'react'
import { rowStyling } from '../constants'

const TD = ({ style = rowStyling, children, ...props }) => (
	<td style={style} {...props}>
		{children}
	</td>
)

export default TD
