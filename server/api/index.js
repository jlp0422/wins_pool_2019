const app = require('express').Router()
const { msfTwo, asyncMiddleware } = require('../middleware')

app.get(
	'/games',
	asyncMiddleware(async (req, res) => {
		const response = await msfTwo.getData(
			'nfl',
			'2020-regular',
			'seasonal_games',
			'json',
			{ force: true }
		)
		res.send(response)
	})
)

app.get(
	'/wins',
	asyncMiddleware(async (req, res) => {
		const response = await msfTwo.getData(
			'nfl',
			'2020-regular',
			'seasonal_standings',
			'json',
			{ stats: 'W', force: true }
		)
		res.send(response)
	})
)

module.exports = app
