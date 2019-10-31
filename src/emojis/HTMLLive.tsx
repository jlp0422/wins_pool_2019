import React, { FunctionComponent } from 'react'
import { emojiStyling } from '../constants'
import { IProps } from './types'

const HTMLLive: FunctionComponent<IProps> = ({ styling = emojiStyling }) => (
	<span style={styling}>&#127944;</span>
)

export default HTMLLive
