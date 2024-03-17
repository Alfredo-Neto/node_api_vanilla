let taskController = require('./controllers/taskController');
taskController = new taskController();

const routes = [
	{
		url: '/tasks',
		method: 'GET',
		handler: taskController.index
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
		handler: taskController.delete
	}
]

module.exports = routes;