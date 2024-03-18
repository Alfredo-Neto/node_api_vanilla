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

		const foundTask = this.taskService.findById(id);

		if (!foundTask) {
			return res.send(404, "Task not found");
		}

		const updatedTask = this.taskService.update(foundTask, task);

		if (updatedTask) {
			return res.send(200, { updatedTask })
		}
		
		res.send(400, { message: "Bad request" });
	}

	remove (req, res) {
		const { id } = req.params;

		const foundTask = this.taskService.findById(id);

		if (!foundTask) {
			return res.send(404, "Task not found");
		}

		const tasks = this.taskService.delete(id);
		
		res.send(200, { tasks });
	}
}

module.exports = TaskController;