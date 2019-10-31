import React, { FunctionComponent } from 'react'
import { emojiStyling } from '../constants'
import { IProps } from './types'

const HTMLLoser: FunctionComponent<IProps> = ({ styling = emojiStyling }) => (
	<span style={styling}>&#10060;</span>
)

export default HTMLLoser
