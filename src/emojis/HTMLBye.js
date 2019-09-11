import React from 'react'
import { emojiStyling } from '../helpers'

const HTMLBye = ({ styling = emojiStyling }) => (
	<span style={styling}>&#128075;</span>
)

export default HTMLBye
