import React from 'react'
import { emojiStyling } from '../constants'

const HTMLLoser = ({ styling = emojiStyling }) => (
	<span style={styling}>&#10060;</span>
)

export default HTMLLoser
