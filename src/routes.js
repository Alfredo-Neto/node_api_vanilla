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
		handler: taskController.show.bind(taskController)
	},
	{
		url: '/tasks',
		method: 'POST',
		handler: taskController.create.bind(taskController)
	},
	{
		url: '/tasks/:id',
		method: 'PUT',
		handler: taskController.update.bind(taskController)
	},
	{
		url: '/tasks/:id',
		method: 'DELETE',
		handler: taskController.remove.bind(taskController)
	}
]

module.exports = routes;