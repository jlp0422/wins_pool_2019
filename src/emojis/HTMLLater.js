import React from 'react'
import { emojiStyling } from '../constants'

const HTMLLater = ({ styling = emojiStyling }) => (
	<span style={styling}>&#128284;</span>
)

export default HTMLLater
