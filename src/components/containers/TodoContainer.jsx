/* 
TodoContainer component that connects to components stored in itself
*/

import { connect } from 'react-redux'
import { TodoList } from '../pure/TodoList'
import { toggleTODO } from '../../store/actions/actions';

// Filter Todo List
const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed);
        default:
            return todos;
    }
}

//Configuration connecting to TodoList
const mapStateToProps = (state) => {
    return {
        //TodoList's prop -> task filter
        todos: filterTodos(state.todosState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTODO(id))
        }
    }
}
// We connect State & Dispach to TodoList's Props 
export const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)