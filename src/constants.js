import {
	HTMLWinner,
	HTMLLoser,
	HTMLBye,
	HTMLLater,
	HTMLLive,
	HTMLTie
} from './emojis'

export const poolSelections = [
	{
		pick: 1,
		name: 'Drew Behren',
		selection: 'Kansas City Chiefs',
		abbreviation: 'KC'
	},
	{
		pick: 2,
		name: 'Jake Love',
		selection: 'Baltimore Ravens',
		abbreviation: 'BAL'
	},
	{
		pick: 3,
		name: 'Adam Shaprio',
		selection: 'San Francisco 49ers',
		abbreviation: 'SF'
	},
	{
		pick: 4,
		name: 'Nate Shapiro',
		selection: 'Tampa Bay Buccaneers',
		abbreviation: 'TB'
	},
	{
		pick: 5,
		name: 'Jake Guterman',
		selection: 'Dallas Cowboys',
		abbreviation: 'DAL'
	},
	{
		pick: 6,
		name: 'Evan Philipson',
		selection: 'New Orleans Saints',
		abbreviation: 'NO'
	},
	{
		pick: 7,
		name: 'Kurt Stratton',
		selection: 'Seattle Seahawks',
		abbreviation: 'SEA'
	},
	{
		pick: 8,
		name: 'Jake Edelstein',
		selection: 'Pittsburgh Steelers',
		abbreviation: 'PIT'
	},
	{
		pick: 9,
		name: 'Jake Shapiro',
		selection: 'Buffalo Bills',
		abbreviation: 'BUF'
	},
	{
		pick: 10,
		name: 'Jeremy Philipson',
		selection: 'New England Patriots',
		abbreviation: 'NE'
	},
	{
		pick: 11,
		name: 'Kurt Stratton',
		selection: 'Indianapolis Colts',
		abbreviation: 'IND'
	},
	{
		pick: 12,
		name: 'Jeremy Philipson',
		selection: 'Minnesota Vikings',
		abbreviation: 'MIN'
	},
	{
		pick: 13,
		name: 'Adam Shaprio',
		selection: 'Philadelphia Eagles',
		abbreviation: 'PHI'
	},
	{
		pick: 14,
		name: 'Jake Shapiro',
		selection: 'Tennessee Titans',
		abbreviation: 'TEN'
	},
	{
		pick: 15,
		name: 'Jake Guterman',
		selection: 'Green Bay Packers',
		abbreviation: 'GB'
	},
	{
		pick: 16,
		name: 'Jake Love',
		selection: 'Arizona Cardinals',
		abbreviation: 'ARI'
	},
	{
		pick: 17,
		name: 'Jake Edelstein',
		selection: 'Houston Texans',
		abbreviation: 'HOU'
	},
	{
		pick: 18,
		name: 'Nate Shapiro',
		selection: 'Los Angeles Rams',
		abbreviation: 'LA'
	},
	{
		pick: 19,
		name: 'Evan Philipson',
		selection: 'Cleveland Browns',
		abbreviation: 'CLE'
	},
	{
		pick: 20,
		name: 'Drew Behren',
		selection: 'Denver Broncos',
		abbreviation: 'DEN'
	},
	{
		pick: 21,
		name: 'Jake Edelstein',
		selection: 'Los Angeles Chargers',
		abbreviation: 'LAC'
	},
	{
		pick: 22,
		name: 'Evan Philipson',
		selection: 'Chicago Bears',
		abbreviation: 'CHI'
	},
	{
		pick: 23,
		name: 'Jake Shapiro',
		selection: 'Atlanta Falcons',
		abbreviation: 'ATL'
	},
	{
		pick: 24,
		name: 'Jeremy Philipson',
		selection: 'Detroit Lions',
		abbreviation: 'DET'
	},
	{
		pick: 25,
		name: 'Nate Shapiro',
		selection: 'Miami Dolphins',
		abbreviation: 'MIA'
	},
	{
		pick: 26,
		name: 'Drew Behren',
		selection: 'New York Giants',
		abbreviation: 'NYG'
	},
	{
		pick: 27,
		name: 'Jake Guterman',
		selection: 'Las Vegas Raiders',
		abbreviation: 'LV'
	},
	{
		pick: 28,
		name: 'Kurt Stratton',
		selection: 'Carolina Panthers',
		abbreviation: 'CAR'
	},
	{
		pick: 29,
		name: 'Jake Love',
		selection: 'Cincinnati Bengals',
		abbreviation: 'CIN'
	},
	{
		pick: 30,
		name: 'Adam Shaprio',
		selection: 'Washington Football Team',
		abbreviation: 'WAS'
	}
]

export const byeWeeks = {
	1: [],
	2: [],
	3: [],
	4: ['TEN', 'PIT'],
	5: ['DET', 'GB', 'NE', 'DEN'],
	6: ['NO', 'LV', 'SEA', 'LAC'],
	7: ['IND', 'MIN', 'MIA', 'BAL'],
	8: ['ARI', 'WAS', 'JAX', 'HOU'],
	9: ['CIN', 'CLE', 'PHI', 'LA'],
	10: ['ATL', 'DAL', 'KC', 'NYJ'],
	11: ['BUF', 'CHI', 'NYG', 'SF'],
	12: [],
	13: ['CAR', 'TB'],
	14: [],
	15: [],
	16: [],
	17: []
}

export const rowStyling = { textAlign: 'center', padding: '2px 5px' }
export const keyStyling = {
	margin: '2px 0',
	padding: '0px 3px',
	textAlign: 'center'
}
export const emojiStyling = { paddingLeft: '2px' }
export const emojiKeyStyling = { paddingRight: '10px' }

export const keyMap = [
	{ copy: 'win', Component: HTMLWinner },
	{ copy: 'loss', Component: HTMLLoser },
	{ copy: 'tie', Component: HTMLTie },
	{ copy: 'bye', Component: HTMLBye },
	{ copy: 'live', Component: HTMLLive },
	{ copy: 'scheduled', Component: HTMLLater }
]

export const myTheme = {
	title: { fontSize: '18px' },
	header: {
		fontSize: '16px',
		fontWeight: '800'
	},
	rows: { fontSize: '14px' }
}
