import loginService from '../services/LoginService'

const userReducer = (store = null, action) => {
  switch (action.type) {
    case 'REGISTER':
      return action.data
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      return null
    default:
      return store
  }
}

export const actionForRegister = (information) => {
  return async dispatch => {
    const response = await loginService.register(information)
    console.log(response)
    window.localStorage.setItem('MS_token', response.token)
    dispatch({
      type: 'REGISTER',
      data: response.user
    })
    return response
  }
}

export const setLogin = () => {
  return async (dispatch) => {
    const response = await loginService.getUser()
    dispatch({
      type: 'LOGIN',
      data: response
    })
  }
}

export const actionForLogin = (creditentals) => {
  // console.log('action for login..')
  return async (dispatch) => {
    const response = await loginService.login(creditentals)
    console.log('response: ', response)
    window.localStorage.setItem('MS_token', response.token)
    dispatch({
      type: 'LOGIN',
      data: response.user
    })
  }
}

export const actionForLogout = () => {
  return async (dispatch) => {
    dispatch({
      type: 'LOGOUT',
      data: null
    })
  }
}

export default userReducer
