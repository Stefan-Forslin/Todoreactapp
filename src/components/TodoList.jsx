import AddTodo from './AddTodo'
import './TodoList.css'
const TodoList = () => (
<div className=".todo-list">
<ul>
  <li className="done">knulla hunden <button>klart</button>
  </li>
  <li className="done">raka fittan </li>
  <li className="done">dricka enema </li>
  <li className="done">afterdinner snack </li>
</ul>
<AddTodo />
</div>
)
export default TodoList
//✔
