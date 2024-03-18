class TaskService {
	constructor({ taskRepository, taskEntity }) {
		this.taskRepository = taskRepository;
		this.taskEntity = taskEntity;
	}

	findAll(order) {
		return this.taskRepository.findAll(order);
	}

	findById(id) {
		return this.taskRepository.findById(id);
	}

	create(task) {
		const verifiedTask = this.taskEntity.isValid(task);

		if (verifiedTask.valid) {
			return this.taskRepository.create(task);
		}
		
		return null;
	}
}

module.exports = TaskService