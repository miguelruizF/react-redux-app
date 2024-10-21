

const mapStateToProps = (state) => {
    return {
        loged: state.userState.loged,
        fetching: state.userState.fetching
    }
}