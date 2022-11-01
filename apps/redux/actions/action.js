
const ADD_TASKER = (data) => {
    return { type: 'ADD_TASKER', task:data }
}

const EDIT_TASKER = (data, index) => {
    return { type: 'EDIT_TASKER', task: data, index:index }
}

const DELETE_TASKER = (index) => {
    return { type: 'DELETE_TASKER', index:index}
}

export { 
    ADD_TASKER,
    EDIT_TASKER,
    DELETE_TASKER
}