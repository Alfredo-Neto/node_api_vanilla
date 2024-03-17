class Task {

	isValid(task) {
		let validTitle, validDescription;

		for (const element of Object.entries(task)) {
			const [ key, value ] = element;
			
			if (key === 'title' && value) {
				validTitle = value;
			}

			if (key === 'description' && value) {
				validDescription = value;
			}
		}

		return {
			valid: !!validTitle && !!validDescription
		}
	}
}

module.exports = Task;