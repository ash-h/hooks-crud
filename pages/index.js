import {useContext, useReducer} from 'react';

const initialState = {
    count: 0
}

function reducer(state, action) {
    switch(action.type) {
        case "increment":
            return {
                count: state.count + 1
            };
        case "decrement":
            return {
                count: state.count -1
            }

        default:
            return initialState
    }

}
function Index() {
    const [state, dispatch] = useReducer(reducer, initialState);
    // const value = useContext()
    return (<div>
                Count: {state.count}
                <button onClick={() => dispatch({type: "increment"})}>Increment</button>
                <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
            </div>)
}

export default Index