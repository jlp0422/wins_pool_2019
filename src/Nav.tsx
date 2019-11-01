import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

const Nav: FunctionComponent<{ location: { pathname: string } }> = ({
	location
}) => {
	const weeklyWinsTable: string = 'weekly wins table'
	const standings: string = 'standings'
	return (
		<ul>
			<li>
				{location.pathname === '/weeks-table' ? (
					weeklyWinsTable
				) : (
					<Link to="/weeks-table">{weeklyWinsTable}</Link>
				)}
			</li>
			<li>
				{location.pathname === '/standings' ? (
					standings
				) : (
					<Link to="/standings">{standings}</Link>
				)}
			</li>
		</ul>
	)
}

export default Nav
