
let dataState = {
    data:[]
}

const rootReducer = (state = dataState, action) => {
    switch (action.type) {
        case 'ADD_TASKER':
            let i = state.data.length + 1;
            let arr = {id:i, task:action.task}
            let data = state.data.concat(arr);
            return {
                ...state,
                data: data,
            }
        case 'EDIT_TASKER':
            let op = state.data;
            let objIndex = op.findIndex((obj => obj.id == action.index));
            let arr2 = {id:action.index, task:action.task}
            op[objIndex] = arr2
            return {
                ...state,
            }
        case 'DELETE_TASKER':
            let ins = state.data.findIndex((obj => obj.id == action.index));
            state.data.splice(ins, 1)
            return {
                ...state,
                data: state.data
            }
        default:
            return state;

    }
}

export default rootReducer;


