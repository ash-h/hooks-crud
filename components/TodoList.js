import { useContext} from 'react'
import TodosContext from '../utils/context'

const TodoList = () => {

    const {state, dispatch} = useContext(TodosContext)

    return (
        <div>
            todolist:
            <ul>
                {state.todos.map(todo => (
                    <li key={todo.id}>
                        <span className={`${todo.complete && "done"}`}
                            onDoubleClick={()=>dispatch({type: "TOGGLE_TODO", payload: todo})}
                        >{todo.text}</span>
                        <button type="button">edit</button>
                        <button type="button"
                                onClick={()=> dispatch({type: "REMOVE_TODO", payload:todo})}
                        >
                            delete
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default TodoList