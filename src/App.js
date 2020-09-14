import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Nav from './Nav'
import WeeksTable from './WeeksTable'
import Standings from './Standings'
import {
	parseSeasonGames,
	indexByWeek,
	aggregateWins,
	formatTeams
} from './helpers'

const App = () => {
	const [weeklyGames, setWeeklyGames] = useState({})
	const [winsPerTeam, setWinsPerTeam] = useState({})
	const [teamWins, setTeamWins] = useState([])

	useEffect(() => {
		const sourceApiGames = axios.CancelToken.source()
		const sourceApiWins = axios.CancelToken.source()

		const fetchData = async () => {
			try {
				const weeklyGamesResult = await axios
					.get('/api/games', {
						cancelToken: sourceApiGames.token
					})
					.then(res => res.data.games)
					.then(parseSeasonGames)
					.then(indexByWeek)

				const { winsPerTeamResult, formattedTeams } = await axios
					.get('/api/wins', {
						cancelToken: sourceApiWins.token
					})
					.then(res => res.data.teams)
					.then(teams => ({
						winsPerTeamResult: aggregateWins(teams),
						formattedTeams: formatTeams(teams)
					}))

				setWeeklyGames(weeklyGamesResult)
				setWinsPerTeam(winsPerTeamResult)
				setTeamWins(formattedTeams)
			} catch (error) {
				if (axios.isCancel()) {
					console.log('Request was cancelled')
				} else {
					throw error
				}
			}
		}

		fetchData()

		return () => {
			sourceApiGames.cancel()
			sourceApiWins.cancel()
		}
	}, [])

	return (
		<Router>
			<div style={{ margin: '10px' }}>
				<h2 style={{ margin: '0 0 10px' }}>wins pool 2020</h2>
				<Route path="/" component={Nav} />
				<Switch>
					<Route exact path="/" render={() => <Redirect to="/weeks-table" />} />
					<Route
						path="/weeks-table"
						render={() => (
							<WeeksTable weeklyGames={weeklyGames} winsPerTeam={winsPerTeam} />
						)}
					/>
					<Route
						path="/standings"
						render={() => <Standings teamWins={teamWins} />}
					/>
				</Switch>
			</div>
		</Router>
	)
}

export default App
