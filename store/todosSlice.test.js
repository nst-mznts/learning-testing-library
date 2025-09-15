import { addTodo, toggleTodo, clearTodos } from './todosSlice';
import sliceReducer from './todosSlice';

describe("todosSlice addTodo", () => {
    it("should add todo", () => {
        const initialState = { items: [] };
        const result = sliceReducer(initialState, addTodo({ id: "1", text: "React" }));
        expect(result.items).toHaveLength(1);
    });
    it("should return an object with id, text, and completed properties", () => {
        const initialState = { items: [] };
        const result = sliceReducer(initialState, addTodo({ id: "1", text: "React" }));
        expect(result.items[0]).toHaveProperty("id");
        expect(result.items[0]).toHaveProperty("text");
        expect(result.items[0]).toHaveProperty("completed");
    });
});
describe("todosSlice toggleTodo", () => {
    it("should toggle todo", () => {
        const initialState = { items: [{ id: "1", text: "React", completed: false }] };
        const result = sliceReducer(initialState, toggleTodo("1"));
        expect(result.items[0].completed).toBe(true);
    });
    it("should not change state if id not found", () => {
        const initialState = { items: [{ id: "1", text: "React", completed: false }] };
        const result = sliceReducer(initialState, toggleTodo("999"));
        expect(result).toEqual(initialState);
    });
});
describe("todosSlice clearTodos", () => {
    it("should remove all todos from the store", () => {
        const initialState = { items: [{ id: "1", text: "React", completed: false }] };
        const result = sliceReducer(initialState, clearTodos());
        expect(result.items).toHaveLength(0);
    });
});