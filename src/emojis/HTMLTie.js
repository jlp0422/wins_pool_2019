import React from 'react'
import { emojiStyling } from '../constants'

const HTMLTie = ({ styling = emojiStyling }) => (
	<span style={styling}>&#128084;</span>
)

export default HTMLTie
