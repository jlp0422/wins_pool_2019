import React from 'react'
import { emojiStyling } from '../constants'

const HTMLWinner = ({ styling = emojiStyling }) => (
	<span style={styling}>&#9989;</span>
)

export default HTMLWinner
