let tasks = require('../mocks/tasks');
class TaskController {

	constructor({ taskService }) {
		this.taskService = taskService;
	}

	index (req, res) {
		let { order } = req.query;

		const orderedTasks = this.taskService.findAll(order);
		res.send(200, { orderedTasks });
	}

	show (req, res) {
		const { id } = req.params;

		let task = this.taskService.findById(id);

		if (!task) {
			return res.send(404, "Task not found");
		}

		res.send(200, { task })
	}

	create (req, res) {
		let { task } = req.body;
		
		const createdTask = this.taskService.create(task);

		if (createdTask) {
			return res.send(201, { message: "created", createdTask});
		}

		res.send(400, { message: "Bad request" });
	}

	update (req, res) {
		let { task } = req.body;
		const { id } = req.params;
		const { title, description } = task;

		task = tasks.find(task => {
			return task.id === id;
		});

		if (!task) {
			return res.send(404, "Task not found");
		}

		const verifiedTask = taskEntity.isValid(task);

		if (verifiedTask.valid) {
			tasks.forEach(task => {
				if(task.id === id) {
					task.title = title;
					task.description = description;
					task.updatedAt = new Date();
				}
			});
		}

		res.send(200, { task })
	}

	remove (req, res) {
		const { id } = req.params;

		let task = tasks.find(task => {
			return task.id === id;
		});

		if (!task) {
			return res.send(404, "Task not found");
		}

		tasks.splice(tasks.findIndex((task) => {
			return task.id === id
		}), 1);
		
		res.send(200, { tasks });
	}
}

module.exports = TaskController;