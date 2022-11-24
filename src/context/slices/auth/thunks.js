import {onLogoutFirebase, signInWithGoogle} from '../../../firebase'
import {checkingCredentials, login, logout} from './authSlice'

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const res = await signInWithGoogle()

    if (!res.ok) return dispatch(logout(res.errorMessage))

    dispatch(login(res))
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    await onLogoutFirebase()

    dispatch(logout({}))
  }
}
