export type Props = {
  todo: Todo;
  handleDeleteTodo: (id: string) => void;
  handleCheckTodo: (id: string) => void;
}

export const Row = ({
  todo: { id, task, isCompleted },
  handleDeleteTodo,
  handleCheckTodo,
}: Props) => (
  <div>
    <p>{task}</p>
    <div>
      <button
        aria-label="Delete a task"
        onClick={() => handleDeleteTodo(id)}
      >
        X
      </button>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => handleCheckTodo(id)}
      />
    </div>
  </div>
);