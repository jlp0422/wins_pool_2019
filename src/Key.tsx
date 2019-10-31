import React, { FunctionComponent } from 'react'
import { keyStyling } from './constants'

interface IProps {
	style: any,
	copy: string
}

const Key: FunctionComponent<IProps> = ({ style = keyStyling, children, copy, ...props }) => (
	<p style={style} {...props}>
		{copy}: {children}
	</p>
)

export default Key
