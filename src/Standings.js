import React from 'react'
import { TH, TD } from './shared'
import {
	poolSelections,
	sortByWins,
	indexByPerson,
	sumWinsByTeams
} from './helpers'

const Standings = ({ teamWins }) => {
	if (!teamWins.length) {
		return (
			<>
				<h3>standings</h3>
				<h3>Loading...</h3>
			</>
		)
	}

	const teamsPerPerson = indexByPerson(poolSelections)
	const sortedRostersAndWins = Object.keys(teamsPerPerson)
		.map(person => {
			const personTeams = teamsPerPerson[person]
			return {
				person,
				teams: personTeams,
				wins: sumWinsByTeams(personTeams, teamWins)
			}
		})
		.sort(sortByWins)

	return (
		<div>
			<h3>standings</h3>
			<table>
				<thead>
					<tr>
						<TH>Person</TH>
						<TH>Teams</TH>
						<TH>Total Wins</TH>
					</tr>
				</thead>
				<tbody>
					{sortedRostersAndWins.map(({ person, teams, wins }) => (
						<tr key={person}>
							<TD>{person}</TD>
							<TD>{teams.join(', ')}</TD>
							<TD>{wins}</TD>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Standings