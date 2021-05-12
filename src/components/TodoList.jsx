import { useState } from 'react'
import AddTodo from './AddTodo'
import './TodoList.css'
const TodoList = () => {
	const [todoList, setTodoList] = useState([
		{id: 1, title: 'Study react', isDone: false},
		{id: 2, title: 'Chill', isDone: true},
		{id: 3, title: 'Chill more', isDone: false}
	])
	const markAsDone = id =>{
		setTodoList(todoList.map(todoItem =>{
			if( todoItem.id === id){
				return { ...todoItem, isDone:true}
			} else{
				return todoItem
			}
		}))
	}
	const jsxList = todoList.map(todoItem => (
		<li key={todoItem.id} className={todoItem.isDone ? 'done' : ''}>
		{todoItem.title}
		{todoItem.isDone ? null :
			<button onClick={() =>
			  markAsDone(todoItem.id)}>done</button>}
		</li>
	))
	return (
<div className="todo-list">
<ul>
   {jsxList}
</ul>
<AddTodo />
</div>
)}
export default TodoList
//✔
