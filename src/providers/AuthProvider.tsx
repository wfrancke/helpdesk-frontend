import { useState } from 'react'
import constate from 'constate'

import { Role } from '../types/Role'

interface User {
  accessToken?: string
  role?: Role
}

const useAuthorization = () => {
  const [user, setUser] = useState<User | null>(null)

  const setToken = (newAccessToken: string) => {
    setUser(prevUser => ({
      ...(prevUser || {}),
      accessToken: newAccessToken,
    }))
  }
  const setRole = (newUserRole: Role) => {
    setUser(prevUser => ({
      ...(prevUser || {}),
      role: newUserRole,
    }))
  }

  const logout = () => setUser(null)

  return { setToken, setRole, logout, user }
}

const [
  AuthProvider,
  useSetToken,
  useSetRole,
  useLogout,
  useUserRole,
  useUserLoggedIn,
  useUserAccessToken,
] = constate(
  useAuthorization,
  value => value.setToken,
  value => value.setRole,
  value => value.logout,
  value => value.user?.role,
  value => !!value.user?.accessToken,
  value => value.user?.accessToken
)

export {
  AuthProvider,
  useSetToken,
  useSetRole,
  useLogout,
  useUserRole,
  useUserLoggedIn,
  useUserAccessToken,
}