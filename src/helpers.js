export const poolSelections = [
	{
		pick: 1,
		name: 'Jake Love',
		selection: 'Kansas City Chiefs',
		abbreviation: 'KC'
	},
	{
		pick: 2,
		name: 'Evan Philipson',
		selection: 'New England Patriots',
		abbreviation: 'NE'
	},
	{
		pick: 3,
		name: 'Adam Shapiro',
		selection: 'Los Angeles Rams',
		abbreviation: 'LA'
	},
	{
		pick: 4,
		name: 'Nate Shapiro',
		selection: 'New Orleans Saints',
		abbreviation: 'NO'
	},
	{
		pick: 5,
		name: 'Jeremy Philipson',
		selection: 'Philadelphia Eagles',
		abbreviation: 'PHI'
	},
	{
		pick: 6,
		name: 'Jake Shapiro',
		selection: 'Indianapolis Colts',
		abbreviation: 'IND'
	},
	{
		pick: 7,
		name: 'Kurt Stratton',
		selection: 'Cleveland Browns',
		abbreviation: 'CLE'
	},
	{
		pick: 8,
		name: 'Drew Behren',
		selection: 'Los Angeles Chargers',
		abbreviation: 'LAC'
	},
	{
		pick: 9,
		name: 'Jake Guterman',
		selection: 'Chicago Bears',
		abbreviation: 'CHI'
	},
	{
		pick: 10,
		name: 'Jake Edelstein',
		selection: 'Pittsburgh Steelers',
		abbreviation: 'PIT'
	},
	{
		pick: 11,
		name: 'Kurt Stratton',
		selection: 'Dallas Cowboys',
		abbreviation: 'DAL'
	},
	{
		pick: 12,
		name: 'Jake Edelstein',
		selection: 'Houston Texans',
		abbreviation: 'HOU'
	},
	{
		pick: 13,
		name: 'Adam Shapiro',
		selection: 'Green Bay Packers',
		abbreviation: 'GB'
	},
	{
		pick: 14,
		name: 'Jake Guterman',
		selection: 'Seattle Seahawks',
		abbreviation: 'SEA'
	},
	{
		pick: 15,
		name: 'Jeremy Philipson',
		selection: 'Minnesota Vikings',
		abbreviation: 'MIN'
	},
	{
		pick: 16,
		name: 'Evan Philipson',
		selection: 'Atlanta Falcons',
		abbreviation: 'ATL'
	},
	{
		pick: 17,
		name: 'Drew Behren',
		selection: 'San Francisco 49ers',
		abbreviation: 'SF'
	},
	{
		pick: 18,
		name: 'Nate Shapiro',
		selection: 'Baltimore Ravens',
		abbreviation: 'BAL'
	},
	{
		pick: 19,
		name: 'Jake Shapiro',
		selection: 'Carolina Panthers',
		abbreviation: 'CAR'
	},
	{
		pick: 20,
		name: 'Jake Love',
		selection: 'Jacksonville Jaguars',
		abbreviation: 'JAX'
	},
	{
		pick: 21,
		name: 'Drew Behren',
		selection: 'New York Jets',
		abbreviation: 'NYJ'
	},
	{
		pick: 22,
		name: 'Jake Shapiro',
		selection: 'Buffalo Bills',
		abbreviation: 'BUF'
	},
	{
		pick: 23,
		name: 'Jake Guterman',
		selection: 'Tennessee Titans',
		abbreviation: 'TEN'
	},
	{
		pick: 24,
		name: 'Jake Edelstein',
		selection: 'Denver Broncos',
		abbreviation: 'DEN'
	},
	{
		pick: 25,
		name: 'Nate Shapiro',
		selection: 'Tampa Bay Buccaneers',
		abbreviation: 'TB'
	},
	{
		pick: 26,
		name: 'Jake Love',
		selection: 'Arizona Cardinals',
		abbreviation: 'ARI'
	},
	{
		pick: 27,
		name: 'Jeremy Philipson',
		selection: 'Oakland Raiders',
		abbreviation: 'OAK'
	},
	{
		pick: 28,
		name: 'Kurt Stratton',
		selection: 'Detroit Lions',
		abbreviation: 'DET'
	},
	{
		pick: 29,
		name: 'Evan Philipson',
		selection: 'New York Giants',
		abbreviation: 'NYG'
	},
	{
		pick: 30,
		name: 'Adam Shapiro',
		selection: 'Washington Redskins',
		abbreviation: 'WAS'
	}
]

export const byeWeeks = {
	1: [],
	2: [],
	3: [],
	4: ['NYJ', 'SF'],
	5: ['MIA', 'DET'],
	6: ['BUF', 'CHI', 'IND', 'OAK'],
	7: ['CAR', 'CLE', 'TB', 'PIT'],
	8: ['DAL', 'BAL'],
	9: ['CIN', 'ATL', 'LA', 'NO'],
	10: ['DEN', 'JAX', 'HOU', 'NE', 'PHI', 'WAS'],
	11: ['NYG', 'GB', 'SEA', 'TEN'],
	12: ['KC', 'LAC', 'ARI', 'MIN'],
	13: [],
	14: [],
	15: [],
	16: [],
	17: []
}

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

export const rowStyling = { textAlign: 'center', padding: '2px 5px' }
export const keyStyling = {
	margin: '2px 0',
	padding: '0px 3px',
	textAlign: 'center'
}
export const emojiStyling = { paddingLeft: '5px' }
