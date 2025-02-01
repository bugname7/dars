import { create } from "zustand";

const useTodoStore = create((set) => ({
    todos: [],
    addTodo: (todo) => set((state) => ({ todos: [...state.todos, { id: Date.now(), text: todo }] })),
    removeTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));

export default useTodoStore;
