import React, { FunctionComponent } from 'react'
import { emojiStyling } from '../constants'
import { IProps } from './types'

const HTMLWinner: FunctionComponent<IProps> = ({ styling = emojiStyling }) => (
	<span style={styling}>&#9989;</span>
)

export default HTMLWinner
