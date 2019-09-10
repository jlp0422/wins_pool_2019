import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Nav from './Nav'
import StandingsTable from './StandingsTable'
import Rosters from './Rosters'

const App = () => {
	return (
		<Router>
			<div style={{ margin: '5px' }}>
				<h2 style={{ margin: '0 0 10px' }}>wins pool 2019</h2>
				<Route path="/" component={Nav} />
				<Switch>
					<Route exact path="/" render={() => <Redirect to="/weeks-table" />} />
					<Route path="/weeks-table" component={StandingsTable} />
					<Route path="/rosters" component={Rosters} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
