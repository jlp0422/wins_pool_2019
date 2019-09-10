import React from 'react'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Nav from './Nav'
import StandingsTable from './StandingsTable'

const App = () => {
	return (
		<Router>
			<h2 style={{ margin: '0 0 10px' }}>wins pool 2019</h2>
			<Nav />
			<Switch>
        <Route path="/" component={StandingsTable} />
        {/* <Route path='/rosters' component={Rosters} /> */}
			</Switch>
		</Router>
	)
}

export default App
