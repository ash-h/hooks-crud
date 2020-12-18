import {useContext, useReducer} from "react"
import TodosContext from "../utils/context";
import todosReducer from "../utils/reducer"
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

const Crud = () => {
   const initialState = useContext(TodosContext)
    const [state, dispatch] = useReducer(todosReducer, initialState)

    return (
        <TodosContext.Provider value={{state,dispatch}}>
            <TodoForm/>
            <TodoList/>
        </TodosContext.Provider>
    )
}

export default Crud;