const TodoReducer = (state, action) => {
    switch (action.type) {
        case "added": {
            return [
                ...state,
                {
                    name: action.name,
                },
            ];
        }
        case "changed": {
            return state.map((t) => {
                if (t._id === action.todo._id) {
                    return action.todo;
                } else {
                    return t;
                }
            });
        }
        case "deleted": {
            return state.filter((t) => t._id === action._id);
        }
        default: {
            throw Error("Unknown action" + action.type);
        }
    }
};

export default TodoReducer;
