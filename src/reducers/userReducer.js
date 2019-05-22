import loginService from '../services/LoginService'

const userReducer = (store = null, action) => {
  switch (action.type) {
    case 'REGISTER':
      return (store = action.data)
    case 'LOGIN':
      return (store = action.data)
    case 'LOGOUT':
      return (store = null)
    default:
      return store
  }
}

export const actionForRegister = (information) => {
  return async () => {
    const response = await loginService.register(information)
    window.localStorage.setItem('MS_token', response)
    return response
  }
}

export const setLogin = () => {
  return async (dispatch) => {
    dispatch({
      type: 'LOGIN',
      data: 'logged'
    })
  }
}

export const actionForLogin = (creditentals) => {
  console.log('action for login..')
  return async (dispatch) => {
    const response = await loginService.login(creditentals)
    console.log('response: ', response)
    window.localStorage.setItem('MS_token', response)
    dispatch({
      type: 'LOGIN',
      data: 'logged'
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
