import {useNavigate} from 'react-router-dom'

export const useRoutesNavigate = () => {
  const navigate = useNavigate()

  const onLogout = () => {
    navigate('/auth', {
      preventScrollReset: false,
      replace: true,
    })
  }

  const onLogin = () => {
    navigate('/journal', {
      replace: true,
      preventScrollReset: false,
    })
  }

  const onNavigateTo = (route) => {
    navigate(route, {
      preventScrollReset: false,
    })
  }

  const onNavigateBack = () => {
    navigate(-1)
  }

  return {
    onLogout,
    onLogin,
    onNavigateTo,
    onNavigateBack,
  }
}
