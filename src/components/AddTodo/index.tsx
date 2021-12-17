import { PlusIcon } from '@heroicons/react/solid';
import { ChangeEvent, FormEvent } from 'react';

export type Props = {
  task: string;
  handleSubmitTodo: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent) => void;
}

export const AddTodo = ({
  task,
  handleSubmitTodo,
  handleChange
}: Props) => (
  <form
    onSubmit={handleSubmitTodo}
  >
    <input
      type="text"
      name="task"
      value={task}
      onChange={handleChange}
    />
    <button
      type="submit"
      aria-label="Add task"
    >
     <PlusIcon className="h-5 w-5 text-blue-500"/> 
    </button>
  </form>
);