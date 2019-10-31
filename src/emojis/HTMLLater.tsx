import React, { FunctionComponent } from 'react'
import { emojiStyling } from '../constants'
import { IProps } from './types'

const HTMLLater: FunctionComponent<IProps> = ({ styling = emojiStyling }) => (
	<span style={styling}>&#128284;</span>
)

export default HTMLLater
