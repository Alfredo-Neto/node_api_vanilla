const crypto = require('crypto');

const tasks = [
	{
		id: crypto.randomUUID(),
		title: 'first task',
		description: 'blablabla',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		id: crypto.randomUUID(),
		title: 'second task',
		description: 'blablabla',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		id: crypto.randomUUID(),
		title: 'third task',
		description: 'blablabla',
		createdAt: new Date(),
		updatedAt: new Date()
	}
]

module.exports = tasks;