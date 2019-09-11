import React from 'react'
import { emojiStyling } from '../constants'

const HTMLBye = ({ styling = emojiStyling }) => (
	<span style={styling}>&#128075;</span>
)

export default HTMLBye
