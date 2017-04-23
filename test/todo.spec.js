import chai from "chai";
import Todo from "../src/todo";

const expect = chai.expect;

describe("Todo", () => {
	const todo = new Todo("test todo");
	describe("#setDone()", () => {
		it("should set Todo.done is true", () => {
			todo.setDone(true);
			let done = todo.getDone();
			expect(done).to.equal(true);
		});
	});
});