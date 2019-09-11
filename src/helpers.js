import { byeWeeks } from './constants'

export const sortByWins = (a, b) => {
	return a.wins < b.wins ? 1 : a.wins > b.wins ? -1 : 0
}

export const parseSeasonGames = games => {
	return games
		.filter(
			({ schedule }) =>
				schedule.playedStatus === 'COMPLETED' ||
				schedule.playedStatus === 'LIVE'
		)
		.map(({ schedule, score }) => {
			const homeTeam = schedule.homeTeam.abbreviation
			const awayTeam = schedule.awayTeam.abbreviation
			const isTie = score.awayScoreTotal === score.homeScoreTotal
			return {
				week: schedule.week,
				homeTeam,
				awayTeam,
				winner: isTie
					? null
					: score.awayScoreTotal > score.homeScoreTotal
					? awayTeam
					: homeTeam,
				isTie,
				isLive: schedule.playedStatus === 'LIVE'
			}
		})
}

export const indexByWeek = parsedGames => {
	return parsedGames.reduce((memo, item) => {
		if (!memo[item.week]) {
			memo[item.week] = [item]
		} else {
			memo[item.week] = [...memo[item.week], item]
		}
		return memo
	}, {})
}

export const formatTeams = teams => {
	return teams.map(({ team, stats }) => ({
		wins: stats.standings.wins,
		abbreviation: team.abbreviation,
		fullName: `${team.city} ${team.name}`,
		colors: team.teamColoursHex
	}))
}

export const getTeamWeekInfo = ({ weekGames, abbreviation, weekNumber }) => {
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
			isTie && (homeTeam === abbreviation || awayTeam === abbreviation)
	)
	const isLive = weekGames.find(
		({ isLive, homeTeam, awayTeam }) =>
			isLive && (homeTeam === abbreviation || awayTeam === abbreviation)
	)
	const isByeWeek = byeWeeks[weekNumber].includes(abbreviation)

	return {
		isWinner,
		isLaterGame,
		isTie,
		isLive,
		isByeWeek
	}
}

export const aggregateWins = nflTeams => {
	return nflTeams.reduce((memo, { team, stats }) => {
		memo[team.abbreviation] = stats.standings.wins
		return memo
	}, {})
}

export const indexByPerson = selections => {
	return selections.reduce((memo, pick) => {
		if (memo[pick.name]) {
			memo[pick.name] = memo[pick.name].concat(pick.abbreviation)
		} else {
			memo[pick.name] = [pick.abbreviation]
		}
		return memo
	}, {})
}

export const sumWinsByTeams = (personTeams, teamWins) => {
	return personTeams.reduce(
		(memo, teamAbbrev) =>
			(memo += teamWins.find(team => team.abbreviation === teamAbbrev).wins),
		0
	)
}
