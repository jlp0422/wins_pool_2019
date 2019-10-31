import React, { FunctionComponent } from 'react'
import DataTable from 'react-data-table-component'
import { sortByWins, indexByPerson, sumWinsByTeams } from './helpers'
import { poolSelections, myTheme } from './constants'

const Standings: FunctionComponent<{ teamWins: any[] }> = ({ teamWins }) => {
	if (!teamWins.length) {
		return (
			<>
				<h3>standings</h3>
				<h3>Loading...</h3>
			</>
		)
	}

	const teamsPerPerson = indexByPerson(poolSelections)
	const sortedRostersAndWins = Object.keys(teamsPerPerson)
		.map(person => ({
			person,
			teams: teamsPerPerson[person].join(', '),
			wins: sumWinsByTeams(teamsPerPerson[person], teamWins)
		}))
		.sort(sortByWins)

	return (
		<DataTable
			dense
			striped
			fixedHeader
			highlightOnHover
			defaultSortAsc={false}
			keyField={'person'}
			title={'Season Standings'}
			customTheme={myTheme}
			data={sortedRostersAndWins}
			columns={[
				{
					name: 'Person',
					selector: 'person',
					sortable: true,
					width: '42%'
				},
				{
					name: 'Teams',
					selector: 'teams',
					width: '40%'
				},
				{
					name: 'Wins',
					selector: 'wins',
					sortable: true,
					width: '15%'
				}
			]}
		/>
	)
}

export default Standings
