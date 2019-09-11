import React from 'react'
import { emojiStyling } from '../helpers'

const HTMLLoser = ({ styling = emojiStyling }) => (
	<span style={styling}>&#10060;</span>
)

export default HTMLLoser
