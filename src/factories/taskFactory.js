const TaskController = require('../controllers/taskController');
const TaskService = require('../services/taskService');
const TaskRepository = require('../repositories/taskRepository');
const TaskModel = require('../models/task');
const db = require('../mocks/tasks');

const TaskEntity = require('../entities/task');

const generateInstance = () => {
	const taskModel = new TaskModel({ db });
	const taskRepository = new TaskRepository({ taskModel });
	const taskEntity = new TaskEntity();
	const taskService = new TaskService({ taskRepository, taskEntity })
	const taskController = new TaskController({ taskService })
	
	return taskController;
}

module.exports = { generateInstance };