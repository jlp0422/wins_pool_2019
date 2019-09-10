import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
	poolSelections,
	parseSeasonGames,
	indexByWeek,
	getTeamWeekInfo
} from './helpers'

const StandingsTable = () => {
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

	const rowStyling = { textAlign: 'center', padding: '2px 5px' }
	const keyStyling = {
		margin: '2px 0',
		padding: '0px 3px',
		textAlign: 'center'
	}
	const emojiStyling = { paddingLeft: '5px' }

	const htmlWinner = (styling = emojiStyling) => (
		<span style={styling}>&#9989;</span>
	)
	const htmlLoser = (styling = emojiStyling) => (
		<span style={styling}>&#10060;</span>
	)
	const htmlTie = (styling = emojiStyling) => (
		<span style={styling}>&#128084;</span>
	)
	const htmlBye = (styling = emojiStyling) => (
		<span style={styling}>&#128075;</span>
	)
	const htmlLive = (styling = emojiStyling) => (
		<span style={styling}>&#127944;</span>
	)
	const htmlLater = (styling = emojiStyling) => (
		<span style={styling}>&#128284;</span>
	)

	const weeks = Object.keys(weeklyGames)

	if (!weeks.length) {
		return <h3>Loading...</h3>
	}
	return (
		<div>
			<div style={{ display: 'flex', paddingBottom: '10px' }}>
				<p style={keyStyling}>win: {htmlWinner({})}</p>
				<p style={keyStyling}>loss: {htmlLoser({})}</p>
				<p style={keyStyling}>tie: {htmlTie({})}</p>
				<p style={keyStyling}>bye week: {htmlBye({})}</p>
				<p style={keyStyling}>live: {htmlLive({})}</p>
				<p style={keyStyling}>scheduled: {htmlLater({})}</p>
			</div>
			<table>
				<thead>
					<tr>
						<th style={rowStyling}>Pick</th>
						<th style={rowStyling}>Person</th>
						<th style={rowStyling}>Team</th>
						{poolSelections.slice(0, weeks.length).map(({ pick }) => (
							<th style={rowStyling} key={pick}>
								{pick}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{poolSelections.map(({ pick, name, abbreviation }) => (
						<tr key={pick}>
							<td style={rowStyling}>{pick}</td>
							<td style={rowStyling}>{name}</td>
							<td style={rowStyling}>{abbreviation}</td>
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
									<td style={rowStyling} key={`${weekNumber}-${abbreviation}`}>
										{isLive
											? htmlLive()
											: isByeWeek
											? htmlBye()
											: isTie
											? htmlTie()
											: isWinner
											? htmlWinner()
											: isLaterGame
											? htmlLoser()
											: htmlLater()}
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

export default StandingsTable
