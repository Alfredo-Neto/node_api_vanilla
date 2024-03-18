class TaskRepository {
	constructor({ taskModel }) {
		this.taskModel = taskModel;
		this.tasks = this.taskModel.db;
	}

	findAll(order) {
		let allTasks;
		if (order?.toUpperCase() === "DESC") {
			allTasks = this.tasks.sort((a, b) => b.createdAt - a.createdAt);
		} else {
			allTasks = this.tasks.sort((a, b) => a.createdAt - b.createdAt);
		}

		return allTasks;
	}

	findById(id) {
		return this.tasks.find(task => {
			return task.id === id;
		});
	}
}

module.exports = TaskRepository;