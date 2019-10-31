import React, { FunctionComponent } from 'react'
import { emojiStyling } from '../constants'
import { IProps } from './types'

const HTMLTie: FunctionComponent<IProps> = ({ styling = emojiStyling }) => (
	<span style={styling}>&#128084;</span>
)

export default HTMLTie
