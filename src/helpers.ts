import { byeWeeks } from './constants'
import {
	HTMLWinner,
	HTMLLoser,
	HTMLBye,
	HTMLLater,
	HTMLLive,
	HTMLTie
} from './emojis'

export const sortByWins = (a: { wins: number }, b: { wins: number }) =>
	a.wins < b.wins ? 1 : a.wins > b.wins ? -1 : 0

export const parseSeasonGames = (games: any[]) =>
	games
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

export const indexByWeek = (parsedGames: any[]) =>
	parsedGames.reduce((memo, item) => {
		if (!memo[item.week]) {
			memo[item.week] = [item]
		} else {
			memo[item.week] = [...memo[item.week], item]
		}
		return memo
	}, {})

export const formatTeams = (teams: any[]) =>
	teams.map(({ team, stats }) => ({
		wins: stats.standings.wins,
		abbreviation: team.abbreviation,
		fullName: `${team.city} ${team.name}`,
		colors: team.teamColoursHex
	}))

export const getTeamWeekInfo = ({
	weekGames,
	abbreviation,
	weekNumber
}: {
	weekGames: any[]
	abbreviation: string
	weekNumber: string
}) => {
	const isWinner: boolean = Boolean(
		weekGames.find(({ winner }) => winner === abbreviation)
	)
	const isTie: boolean = Boolean(
		weekGames.find(
			({ isTie, homeTeam, awayTeam }) =>
				isTie && (homeTeam === abbreviation || awayTeam === abbreviation)
		)
	)
	const isLater: boolean = !weekGames.find(
		({ homeTeam, awayTeam }) =>
			homeTeam === abbreviation || awayTeam === abbreviation
	)
	const isLive: boolean = Boolean(
		weekGames.find(
			({ isLive, homeTeam, awayTeam }) =>
				isLive && (homeTeam === abbreviation || awayTeam === abbreviation)
		)
	)
	const isByeWeek: boolean = byeWeeks[weekNumber].includes(abbreviation)

	return {
		isWinner,
		isLater,
		isTie,
		isLive,
		isByeWeek
	}
}

export const aggregateWins = (nflTeams: any[]) =>
	nflTeams.reduce((memo, { team, stats }) => {
		memo[team.abbreviation] = stats.standings.wins
		return memo
	}, {})

export const indexByPerson = (selections: any[]) =>
	selections.reduce((memo, pick) => {
		if (memo[pick.name]) {
			memo[pick.name] = memo[pick.name].concat(pick.abbreviation)
		} else {
			memo[pick.name] = [pick.abbreviation]
		}
		return memo
	}, {})

export const sumWinsByTeams = (personTeams: any[], teamWins: any[]) =>
	personTeams.reduce(
		(memo, teamAbbrev) =>
			(memo += teamWins.find(team => team.abbreviation === teamAbbrev).wins),
		0
	)

export const getEmojiFromBooleans = ({
	isWinner,
	isLater,
	isTie,
	isLive,
	isByeWeek
}: {
	isWinner: boolean
	isLater: boolean
	isTie: boolean
	isLive: boolean
	isByeWeek: boolean
}) =>
	isLive
		? HTMLLive
		: isByeWeek
		? HTMLBye
		: isTie
		? HTMLTie
		: isWinner
		? HTMLWinner
		: isLater
		? HTMLLater
		: HTMLLoser

export const getWeeksFromInfo = (teamInfo: any[]) =>
	teamInfo
		.map(({ weekNumber, teamData }) => ({
			[`W${weekNumber}`]: getEmojiFromBooleans(teamData)
		}))
		.reduce((memo, week, index) => {
			memo[`W${index + 1}`] = week[`W${index + 1}`]
			return memo
		}, {})
