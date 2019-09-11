import React from 'react'
import { rowStyling } from '../helpers'

const TD = ({ style = rowStyling, children, ...props }) => (
	<td style={style} {...props}>
		{children}
	</td>
)

export default TD
