import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../reducers/todoSlice';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
