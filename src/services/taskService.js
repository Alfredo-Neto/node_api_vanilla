class TaskService {
	constructor({ taskRepository }) {
		this.taskRepository = taskRepository;
	}

	findAll(order) {
		return this.taskRepository.findAll(order);
	}

	findById(id) {
		return this.taskRepository.findById(id);
	}
}

module.exports = TaskService