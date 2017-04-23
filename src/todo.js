class Todo {
	constructor(title) {
		this.title = title;
		this.done = false;
	}
	getDone() {
		return this.done;
	}
	getTitle() {
		return this.title;
	}
	setDone(done) {
		this.done = done;
	}
	setTitle(title) {
		this.title = title;
	}
}

export default Todo;
