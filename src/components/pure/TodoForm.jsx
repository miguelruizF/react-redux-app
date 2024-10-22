/* 
Component that allows creating Tasks and has a container that launches actions
*/
import PropTypes from 'prop-types';
import { useRef } from 'react';

export const TodoForm = ({ submit }) => {

    //refer to the text
    const newText = useRef();

    return (
        <div>
            <h2>Create your TODOs</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                submit(newText.current.value);
                //Empty field
                newText.current.value = '';
            }}>
                <input type='text' ref={ newText }/>
                <button type='submit'>
                    Create Todo
                </button>
            </form>
        </div>
    );
}

TodoForm.propTypes = {
    submit: PropTypes.func.isRequired
}
