const taskFactory = require('./factories/taskFactory');
const taskController = taskFactory.generateInstance();

const routes = [
	{
		url: '/tasks',
		method: 'GET',
		handler: taskController.index.bind(taskController)
	},
	{
		url: '/tasks/:id',
		method: 'GET',
		handler: taskController.show
	},
	{
		url: '/tasks',
		method: 'POST',
		handler: taskController.create
	},
	{
		url: '/tasks/:id',
		method: 'PUT',
		handler: taskController.update
	},
	{
		url: '/tasks/:id',
		method: 'DELETE',
		handler: taskController.remove
	}
]

module.exports = routes;