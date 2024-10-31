// import React from 'react'
import { connect } from 'react-redux'
import { addTODO } from '../../store/actions/actions'
import { TodoForm } from '../pure/TodoForm'

const mapStateToProps = (state) => ({
    // Not necessary
})

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (text) => {
            dispatch(addTODO(text))
        }
    }
}

export const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm)
