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
		name: 'Jake Edelstein',
		selection: 'Kansas City Chiefs',
		abbreviation: 'KC'
	},
	{
		pick: 2,
		name: 'Kurt Stratton',
		selection: 'Tampa Bay Buccaneers',
		abbreviation: 'TB'
	},
	{
		pick: 3,
		name: 'Evan Philipson',
		selection: 'Buffalo Bills',
		abbreviation: 'BUF'
	},
	{
		pick: 4,
		name: 'Drew Behren',
		selection: 'Los Angeles Rams',
		abbreviation: 'LA'
	},
	{
		pick: 5,
		name: 'Adam Shapiro',
		selection: 'Baltimore Ravens',
		abbreviation: 'BAL'
	},
	{
		pick: 6,
		name: 'Jake Guterman',
		selection: 'Green Bay Packers',
		abbreviation: 'GB'
	},
	{
		pick: 7,
		name: 'Jeremy Philipson',
		selection: 'Seattle Seahawks',
		abbreviation: 'SEA'
	},
	{
		pick: 8,
		name: 'Jake Shapiro',
		selection: 'Tennessee Titans',
		abbreviation: 'TEN'
	},
	{
		pick: 9,
		name: 'Jake Love',
		selection: 'Cleveland Browns',
		abbreviation: 'CLE'
	},
	{
		pick: 10,
		name: 'Nate Shapiro',
		selection: 'San Francisco 49ers',
		abbreviation: 'SF'
	},
	{
		pick: 11,
		name: 'Jeremy Philipson',
		selection: 'Los Angeles Chargers',
		abbreviation: 'LAC'
	},
	{
		pick: 12,
		name: 'Nate Shapiro',
		selection: 'Miami Dolphins',
		abbreviation: 'MIA'
	},
	{
		pick: 13,
		name: 'Evan Philipson',
		selection: 'New England Patriots',
		abbreviation: 'NE'
	},
	{
		pick: 14,
		name: 'Jake Love',
		selection: 'Dallas Cowboys',
		abbreviation: 'DAL'
	},
	{
		pick: 15,
		name: 'Adam Shapiro',
		selection: 'Washington Football Team',
		abbreviation: 'WAS'
	},
	{
		pick: 16,
		name: 'Kurt Stratton',
		selection: 'Pittsburgh Steelers',
		abbreviation: 'PIT'
	},
	{
		pick: 17,
		name: 'Jake Shapiro',
		selection: 'New Orleans Saints',
		abbreviation: 'NO'
	},
	{
		pick: 18,
		name: 'Drew Behren',
		selection: 'Carolina Panthers',
		abbreviation: 'CAR'
	},
	{
		pick: 19,
		name: 'Jake Guterman',
		selection: 'Indianapolis Colts',
		abbreviation: 'IND'
	},
	{
		pick: 20,
		name: 'Jake Edelstein',
		selection: 'Minnesota Vikings',
		abbreviation: 'MIN'
	},
	{
		pick: 21,
		name: 'Jake Shapiro',
		selection: 'Arizona Cardinals',
		abbreviation: 'ARI'
	},
	{
		pick: 22,
		name: 'Jake Guterman',
		selection: 'Denver Broncos',
		abbreviation: 'DEN'
	},
	{
		pick: 23,
		name: 'Jake Love',
		selection: 'Atlanta Falcons',
		abbreviation: 'ATL'
	},
	{
		pick: 24,
		name: 'Nate Shapiro',
		selection: 'Chicago Bears',
		abbreviation: 'CHI'
	},
	{
		pick: 25,
		name: 'Drew Behren',
		selection: 'Las Vegas Raiders',
		abbreviation: 'LV'
	},
	{
		pick: 26,
		name: 'Jake Edelstein',
		selection: 'Philadelphia Eagles',
		abbreviation: 'PHI'
	},
	{
		pick: 27,
		name: 'Adam Shapiro',
		selection: 'New York Giants',
		abbreviation: 'NYG'
	},
	{
		pick: 28,
		name: 'Jeremy Philipson',
		selection: 'Jacksonville Jaguars',
		abbreviation: 'JAX'
	},
	{
		pick: 29,
		name: 'Kurt Stratton',
		selection: 'Cincinnati Bengals',
		abbreviation: 'CIN'
	},
	{
		pick: 30,
		name: 'Evan Philipson',
		selection: 'Detroit Lions',
		abbreviation: 'DET'
	}
]

export const byeWeeks = {
	1: [],
	2: [],
	3: [],
	4: [],
	5: [],
	6: ['ATL', 'NO', 'NYJ', 'SF'],
	7: ['BUF', 'DAL', 'JAX', 'MIN', 'PIT', 'LAC'],
	8: ['BAL', 'LV'],
	9: ['DET', 'SEA', 'TB', 'WAS'],
	10: ['CHI', 'CIN', 'NYG', 'HOU'],
	11: ['DEN', 'LA'],
	12: ['ARI', 'KC'],
	13: ['CAR', 'CLE', 'GB', 'TEN'],
	14: ['IND', 'MIA', 'NE', 'PHI'],
	15: [],
	16: [],
	17: [],
	18: []
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
