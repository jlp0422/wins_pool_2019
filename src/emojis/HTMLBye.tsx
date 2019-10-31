import React, { FunctionComponent } from 'react'
import { emojiStyling } from '../constants'
import { IProps } from './types'

const HTMLBye: FunctionComponent<IProps> = ({ styling = emojiStyling }) => (
	<span style={styling}>&#128075;</span>
)

export default HTMLBye
