import React from 'react'
import Key from './Key'
import {
	HTMLWinner,
	HTMLLoser,
	HTMLBye,
	HTMLLater,
	HTMLLive,
	HTMLTie
} from './emojis'
import { TH, TD } from './shared'
import { poolSelections, getTeamWeekInfo } from './helpers'

const WeeksTable = ({ weeklyGames, winsPerTeam }) => {
	const weeks = Object.keys(weeklyGames)
	const teamWins = Object.keys(winsPerTeam)

	if (!weeks.length || !teamWins.length) {
		return <h3>Loading...</h3>
	}

	return (
		<div>
			<div style={{ display: 'flex', paddingBottom: '10px' }}>
				<Key copy={'win'}>
					<HTMLWinner />
				</Key>
				<Key copy={'loss'}>
					<HTMLLoser />
				</Key>
				<Key copy={'tie'}>
					<HTMLTie />
				</Key>
				<Key copy={'bye week'}>
					<HTMLBye />
				</Key>
				<Key copy={'live'}>
					<HTMLLive />
				</Key>
				<Key copy={'scheduled'}>
					<HTMLLater />
				</Key>
			</div>
			<table>
				<thead>
					<tr>
						<TH>Pick</TH>
						<TH>Person</TH>
						<TH>Team</TH>
						{poolSelections.slice(0, weeks.length).map(({ pick }) => (
							<TH key={pick}>W{pick}</TH>
						))}
						<TH>Wins</TH>
					</tr>
				</thead>
				<tbody>
					{poolSelections.map(({ pick, name, abbreviation }) => (
						<tr key={pick}>
							<TD>{pick}</TD>
							<TD>{name}</TD>
							<TD>{abbreviation}</TD>
							{Object.keys(weeklyGames).map(weekNumber => {
								const {
									isWinner,
									isLaterGame,
									isTie,
									isLive,
									isByeWeek
								} = getTeamWeekInfo({
									weekGames: weeklyGames[weekNumber],
									abbreviation,
									weekNumber
								})
								return (
									<TD key={`${weekNumber}-${abbreviation}`}>
										{isLive ? (
											<HTMLLive />
										) : isByeWeek ? (
											<HTMLBye />
										) : isTie ? (
											<HTMLTie />
										) : isWinner ? (
											<HTMLWinner />
										) : isLaterGame ? (
											<HTMLLoser />
										) : (
											<HTMLLater />
										)}
									</TD>
								)
							})}
							<TD>{winsPerTeam[abbreviation]}</TD>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default WeeksTable
