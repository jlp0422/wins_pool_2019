import React from 'react'
import DataTable from 'react-data-table-component'
import Key from './Key'
import { getTeamWeekInfo, getWeeksFromInfo } from './helpers'
import { poolSelections, keyMap } from './constants'

const WeeksTable = ({ weeklyGames, winsPerTeam }) => {
	const weeks = Object.keys(weeklyGames)
	const teamWins = Object.keys(winsPerTeam)

	if (!weeks.length || !teamWins.length) {
		return <h3>Loading...</h3>
	}

	const tableData = poolSelections.map(selection => {
		const teamInfo = weeks.map(weekNumber => {
			return {
				weekNumber,
				teamData: getTeamWeekInfo({
					weekGames: weeklyGames[weekNumber],
					abbreviation: selection.abbreviation,
					weekNumber
				})
			}
		})

		return {
			...selection,
			totalWins: winsPerTeam[selection.abbreviation],
			...getWeeksFromInfo(teamInfo)
		}
	})

	return (
		<div>
			<div style={{ display: 'flex', paddingBottom: '10px' }}>
				{keyMap.map(({ copy, Component }) => (
					<Key key={copy} copy={copy}>
						<Component />
					</Key>
				))}
			</div>
			<DataTable
				responsive
				dense
				striped
				fixedHeader
				highlightOnHover
				defaultSortAsc={false}
				keyField={'abbreviation'}
				data={tableData}
				columns={[
					{
						name: 'Pick',
						selector: 'pick',
						sortable: true,
						compact: true,
						maxWidth: '50px'
					},
					{
						name: 'Person',
						selector: 'name',
						sortable: true
					},
					{
						name: 'Team',
						selector: 'abbreviation',
						sortable: true
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
		</div>
	)
}

export default WeeksTable
