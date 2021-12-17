import { data } from '../../data';
import { useState, ChangeEvent, FormEvent } from 'react';
import { Row } from "@components/Row";
import { AddTodo } from "@components/AddTodo";
import { v4 as uuidv4 } from 'uuid';

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(data);
  const [task, setTask] = useState("");

  const handleAddTodo = (todo: Todo) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    setTask("");
  }

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setTask(value);
  }

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault();
    
    const todo = {
      id: uuidv4(),
      task: task,
      isCompleted: false
    }
    
    task && handleAddTodo(todo);
  }

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  const handleCheckTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <section>
      <AddTodo 
        task={task}
        handleSubmitTodo={handleSubmitTodo}
        handleChange={handleChange}
      />
      {todos.map((todo) => (
        <Row
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckTodo={handleCheckTodo}
        />
      ))}
    </section>
  );
}