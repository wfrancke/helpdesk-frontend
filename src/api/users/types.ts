import { Role } from '../../types/Role'

export interface SignUpValues {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface EditDetailsValues {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
}

export interface UserProfileValues {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  role: Role
}