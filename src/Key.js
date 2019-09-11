import React from 'react'
import { keyStyling } from './constants'

const Key = ({ style = keyStyling, children, copy, ...props }) => (
	<p style={style} {...props}>
		{copy}: {children}
	</p>
)

export default Key
