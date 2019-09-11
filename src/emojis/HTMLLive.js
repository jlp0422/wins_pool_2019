import React from 'react'
import { emojiStyling } from '../helpers'

const HTMLLive = ({ styling = emojiStyling }) => (
	<span style={styling}>&#127944;</span>
)

export default HTMLLive
