//Actions that return a type and a payload
//Increment ID for TODO
let nextTodoID = 0;

//Reuse of constants
//Actions Types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/**
 * 
 * @param {string} text 
 * @returns action ADD_TODO
 * Action: Add Task -> Return a task
 */
export const addTODO = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoID++,
            text
        }
    }
}


/**
 * 
 * @param {number} id
 * @returns action TOGGLE_TODO
 * Action: Change the status to false or true -> Just when they have been performed correctly
 */
export const toggleTODO = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id //The reducer will take it
        }
    }
}


/**
 * Action: Change visibility
 * @param {string} filter
 * @returns action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}