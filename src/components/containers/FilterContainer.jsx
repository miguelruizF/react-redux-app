
//FilterContainer is responsible for communicating with the filter the action of sending the filter. 
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../store/actions/actions'
import { Filter } from '../pure/Filter'

const mapStateToProps = (state, ownProps) => {
    return {
        //is active?
        active: ownProps.filter === state.filterState //check if the current filter matches the text 
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

export const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

