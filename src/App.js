import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
	poolSelections,
	parseSeasonGames,
	indexByWeek,
	byeWeeks
} from './helpers'

const App = () => {
	const [weeklyGames, setWeeklyGames] = useState({})
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios
				.get('/api/games')
				.then(res => res.data.games)
				.then(parseSeasonGames)
				.then(indexByWeek)
			setWeeklyGames(result)
		}
		fetchData()
	}, [])

	const htmlTie = <span>&#128084;</span>
	const htmlWinner = <span>&#9989;</span>
	const htmlLoser = <span>&#10060;</span>
	const htmlBye = <span>&#128075;</span>
	const htmlLive = <span>&#127944;</span>
	const htmlLater = <span>&#128284;</span>
	const styling = { textAlign: 'center', padding: '2px 5px' }

	console.log(weeklyGames)
	return (
		<div>
			<h2>wins pool 2019</h2>
			<table>
				<thead>
					<tr>
						<th style={styling}>Pick</th>
						<th style={styling}>Person</th>
						<th style={styling}>Team</th>
						{poolSelections.slice(0, 17).map(({ pick }) => (
							<th style={styling} key={pick}>
								{pick}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{poolSelections.map(({ pick, name, abbreviation }) => (
						<tr key={pick}>
							<td style={styling}>{pick}</td>
							<td style={styling}>{name}</td>
							<td style={styling}>{abbreviation}</td>
							{Object.keys(weeklyGames).map(weekNumber => {
								const weekGames = weeklyGames[weekNumber]
								const isWinner = Boolean(
									weekGames.find(({ winner }) => winner === abbreviation)
								)
								const isLaterGame = Boolean(
									weekGames.find(
										({ homeTeam, awayTeam }) =>
											homeTeam === abbreviation || awayTeam === abbreviation
									)
								)
								const isTie = weekGames.find(
									({ isTie, homeTeam, awayTeam }) =>
										isTie &&
										(homeTeam === abbreviation || awayTeam === abbreviation)
								)
								const isLive = weekGames.find(
									({ isLive, homeTeam, awayTeam }) =>
										isLive &&
										(homeTeam === abbreviation || awayTeam === abbreviation)
								)
								const isByeWeek = byeWeeks[weekNumber].includes(abbreviation)
								return (
									<td style={styling} key={`${weekNumber}-${abbreviation}`}>
										{isLive
											? htmlLive
											: isByeWeek
											? htmlBye
											: isTie
											? htmlTie
											: isWinner
											? htmlWinner
											: isLaterGame
											? htmlLoser
											: htmlLater}
									</td>
								)
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default App
