/* 
List to draw tasks: TodoList
*/
import PropTypes from 'prop-types';
import { Todo } from './Todo';


export const TodoList = ({ todos, onTodoClick }) => {
    return (
        //Content
        <div>
            <h1>Your TODOs</h1>
            <ul>
                { todos.map((todo, index) => 
                    (
                        <Todo 
                            key={ index }
                            { ...todo } // id, text, completed
                            onClick = {
                                () => onTodoClick(todo.id)
                            }
                        />
                    )
                ) }
            </ul>
            
        </div>
    );
}

TodoList.propTypes = {
    //Will be an Array
    todos: PropTypes.arrayOf(
        //Structure of array
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired
            }
        ).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired       
}