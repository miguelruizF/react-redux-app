import { connect } from "react-redux"
import { httpRequest } from "../../store/actions/asyncActions"


const mapStateToProps = (state) => {
    return {
        loged: state.userState.loged,
        fetching: state.userState.fetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => {
            const data = {
                email: email,
                password: password
            }
            const url = 'https://reqres.in/api/login'
            dispatch(httpRequest('POST', url, data));
        }
    }
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)
export default LoginFormContainer