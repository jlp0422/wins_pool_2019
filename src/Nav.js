import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ location }) => {
	return (
		<ul>
			<li>
				{location.pathname === '/weeks-table' ? (
					'standings table'
				) : (
					<Link to="/weeks-table">standings table</Link>
				)}
			</li>
			<li>
				{location.pathname === '/rosters' ? (
					'rosters'
				) : (
					<Link to="/rosters">rosters</Link>
				)}
			</li>
		</ul>
	)
}

export default Nav
