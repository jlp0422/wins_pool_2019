import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
	return (
		<ul>
			<li>
				<Link to="/">standings table</Link>
			</li>
			<li>
				<Link to="/rosters">rosters</Link>
			</li>
		</ul>
	)
}

export default Nav
