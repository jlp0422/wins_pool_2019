import React from 'react'
import DataTable from 'react-data-table-component'
import Key from './Key'
import { getTeamWeekInfo, getWeeksFromInfo } from './helpers'
import { poolSelections, keyMap, myTheme, emojiKeyStyling } from './constants'

const WeeksTable = ({ weeklyGames, winsPerTeam }) => {
	const weeks = Object.keys(weeklyGames)
	const teamWins = Object.keys(winsPerTeam)

	if (!weeks.length || !teamWins.length) {
		return <h3>Loading...</h3>
	}

	const tableData = poolSelections.map(selection => {
		const teamInfo = weeks.map(weekNumber => ({
			weekNumber,
			teamData: getTeamWeekInfo({
				weekGames: weeklyGames[weekNumber],
				abbreviation: selection.abbreviation,
				weekNumber
			})
		}))

		return {
			...selection,
			totalWins: winsPerTeam[selection.abbreviation],
			...getWeeksFromInfo(teamInfo)
		}
	})

	const keyTitle = (
		<div style={{ display: 'flex' }}>
			{keyMap.map(({ copy, Component }) => (
				<Key key={copy} copy={copy}>
					<Component styling={emojiKeyStyling} />
				</Key>
			))}
		</div>
	)

	return (
		<DataTable
			responsive
			dense
			striped
			fixedHeader
			highlightOnHover
			defaultSortAsc={false}
			keyField={'abbreviation'}
			title={keyTitle}
			customTheme={myTheme}
			style={{
				height: '100%'
			}}
			overflowY
			data={tableData}
			columns={[
				{
					name: 'Pick',
					selector: 'pick',
					sortable: true,
					compact: true,
					width: '70px'
				},
				{
					name: 'Person',
					selector: 'name',
					sortable: true,
					width: '120px'
				},
				{
					name: 'Team',
					selector: 'abbreviation',
					// sortable: true,
					width: '120px',
					center: true
				}
			]
				.concat(
					weeks.map(weekNumber => ({
						name: `W${weekNumber}`,
						selector: `W${weekNumber}`,
						cell: row => {
							const Component = row[`W${weekNumber}`]
							return <Component />
						}
					}))
				)
				.concat({
					name: 'Total Wins',
					selector: 'totalWins',
					sortable: true
				})}
		/>
	)
}

export default WeeksTable
