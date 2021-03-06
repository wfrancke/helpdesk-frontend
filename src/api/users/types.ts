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

export interface ProfileValues {
  id: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  role: Role
  specialty: string[]
}

export interface UserProfileValues {
  _id: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  role: Role
  specialty: string[]
}

export interface EditPasswordValues {
  password: string
}

export interface TeamAssignmentValues {
  teamId: string
}

export interface EditSpecialtyValues {
  specialty: string[]
}