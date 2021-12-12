import { useState } from 'react'
import constate from 'constate'

interface User {
  accessToken?: string
}

const useAuthorization = () => {
  const [user, setUser] = useState<User | null>(null)

  const setToken = (newAccessToken: string) => {
    setUser(prevUser => ({
      ...(prevUser || {}),
      accessToken: newAccessToken,
    }))
  }

  const logout = () => setUser(null)

  return { setToken, logout, user }
}

const [
  AuthProvider,
  useSetToken,
  useLogout,
  useUserLoggedIn,
  useUserAccessToken,
] = constate(
  useAuthorization,
  value => value.setToken,
  value => value.logout,
  value => !!value.user?.accessToken,
  value => value.user?.accessToken
)

export {
  AuthProvider,
  useSetToken,
  useLogout,
  useUserLoggedIn,
  useUserAccessToken,
}