const app = require('express').Router()
const { msfTwo, asyncMiddleware } = require('../middleware')

app.get(
	'/games',
	asyncMiddleware(async (req, res) => {
		const response = await msfTwo.getData(
			'nfl',
			'2019-regular',
			'seasonal_games',
			'json',
			{ force: true }
		)
		res.send(response)
	})
)

module.exports = app
