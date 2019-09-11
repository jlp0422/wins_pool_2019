import React from 'react'
import { keyStyling } from './helpers'

const Key = ({ style = keyStyling, children, copy }) => (
	<p style={style}>
		{copy}: {children}
	</p>
)

export default Key
