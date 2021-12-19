import { useUserRole } from '../providers/AuthProvider'
import { Role } from '../types/Role'

const useRole = (accessRole: Role): boolean => {
  const userRole = useUserRole()
  if (!userRole) {
    return false
  }

  return userRole === accessRole
}

export { useRole }