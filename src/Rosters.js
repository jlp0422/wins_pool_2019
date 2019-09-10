import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { poolSelections, formatTeams } from './helpers'

const Rosters = () => {
	const [teamWins, setTeamWins] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios
				.get('/api/wins')
				.then(res => res.data.teams)
				.then(formatTeams)
			setTeamWins(result)
		}
		fetchData()
	}, [])

	const teamsPerPerson = poolSelections.reduce((memo, pick) => {
		if (memo[pick.name]) {
			memo[pick.name] = memo[pick.name].concat(pick.abbreviation)
		} else {
			memo[pick.name] = [pick.abbreviation]
		}
		return memo
	}, {})

	const rowStyling = { textAlign: 'center', padding: '2px 5px' }

	if (!teamWins.length) {
		return (
			<>
				<h3>rosters</h3>
				<h3>Loading...</h3>
			</>
		)
	}

	return (
		<div>
			<h3>rosters</h3>
			<table>
				<thead>
					<tr>
						<th style={rowStyling}>Person</th>
						<th style={rowStyling}>Teams</th>
						<th style={rowStyling}>Total Wins</th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(teamsPerPerson).map(person => {
						const personTeams = teamsPerPerson[person]
						return (
							<tr key={person}>
								<td style={rowStyling}>{person}</td>
								<td style={rowStyling}>
									{personTeams.map((team, i, arr) => (
										<span key={team}>
											{team}
											{i === arr.length - 1 ? '' : ', '}
										</span>
									))}
								</td>
								<td style={rowStyling}>
									{personTeams.reduce(
										(memo, teamAbbrev) =>
											(memo += teamWins.find(
												team => team.abbreviation === teamAbbrev
											).wins),
										0
									)}
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default Rosters
