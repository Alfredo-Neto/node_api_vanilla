class TaskService {
	constructor({ taskRepository }) {
		this.taskRepository = taskRepository;
	}

	findAll(order) {
		return this.taskRepository.findAll(order);
	}
}

module.exports = TaskService