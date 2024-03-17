let tasks = require('../mocks/tasks');
let taskEntity = require('../entities/task');
taskEntity = new taskEntity();
const crypto = require('crypto');

class TaskController {
	index (req, res) {
		let { order } = req.query;

		let orderedTasks;
		if (order?.toUpperCase() === "DESC") {
			orderedTasks = tasks.sort((a, b) => b.createdAt - a.createdAt);
		} else {
			orderedTasks = tasks.sort((a, b) => a.createdAt - b.createdAt);
		}

		res.send(200, { orderedTasks })
	}

	show (req, res) {
		const { id } = req.params;

		let task = tasks.find(task => {
			return task.id === id;
		});

		if (!task) {
			return res.send(404, "Task not found");
		}

		res.send(200, { task })
	}

	create (req, res) {
		let { task } = req.body;
		
		const verifiedTask = taskEntity.isValid(task);

		if (verifiedTask.valid) {
			task = {
				id: crypto.randomUUID(),
				createdAt: new Date(),
				updatedAt: new Date(),
				...task
			}
	
			tasks.push(task);
		}

		res.send(201, { message: "created", task});
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

	delete (req, res) {
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