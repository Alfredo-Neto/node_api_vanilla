class TaskRepository {
	constructor({ taskModel }) {
		this.taskModel = taskModel;
	}

	findAll(order) {
		let tasks = this.taskModel.db;

		if (order?.toUpperCase() === "DESC") {
			tasks = tasks.sort((a, b) => b.createdAt - a.createdAt);
		} else {
			tasks = tasks.sort((a, b) => a.createdAt - b.createdAt);
		}

		return tasks;
	}
}

module.exports = TaskRepository;