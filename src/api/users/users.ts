import { useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  UseQueryOptions,
  UseQueryResult
} from 'react-query'
import { AxiosInstance } from 'axios'

import { useFetch } from '../../providers/FetchProvider'
import { SignUpValues,
  EditDetailsValues,
  ProfileValues,
  UserProfileValues,
  EditPasswordValues,
  TeamAssignmentValues,
  EditSpecialtyValues
} from './types'

const postSignUp = async (
  instance: AxiosInstance,
  values: SignUpValues
): Promise<SignUpValues> => {
  const { data } = await instance.post('/users', values)
  return data
}

export const useSignUpMutation = (options?: UseMutationOptions<SignUpValues, Error, SignUpValues>)
: UseMutationResult<SignUpValues, Error, SignUpValues> => {
  const { fetch } = useFetch()
  return useMutation('signUp', (values: SignUpValues) => postSignUp(fetch, values), options)
}

const getProfile = async (
  instance: AxiosInstance
): Promise<ProfileValues> => {
  const { data } = await instance.get('/users/profile')
  return data
}

export const useProfileQuery = (options?: Omit<UseQueryOptions<ProfileValues, unknown>, 'queryKey'>)
: UseQueryResult<ProfileValues, unknown> => {
  const { fetch } = useFetch()
  return useQuery('getProfile', () => getProfile(fetch), options)
}

const getUser = async (
  instance: AxiosInstance,
  id: string,
): Promise<UserProfileValues> => {
  const { data } = await instance.get(`users/id/${id}`)
  return data
}

export const useUserQuery = (id: string, options?: Omit<UseQueryOptions<UserProfileValues, unknown>, 'queryKey'>)
: UseQueryResult<UserProfileValues, unknown> => {
  const { fetch } = useFetch()
  return useQuery(['getUser', id], () => getUser(fetch, id), options)
}

const putOwnDetails = async (
  instance: AxiosInstance,
  values: EditDetailsValues
): Promise<EditDetailsValues> => {
  const { data } = await instance.put('users', values)
  return data
}

export const useUpdateOwnDetailsMutation = (
  options?: UseMutationOptions<EditDetailsValues, Error, EditDetailsValues>
): UseMutationResult<EditDetailsValues, Error, EditDetailsValues> => {
  const { fetch } = useFetch()
  return useMutation(
    'updateOwnDetails',
    (values: EditDetailsValues) => putOwnDetails(fetch, values),
    options
  )
}

const putPassword = async (
  instance: AxiosInstance,
  values: EditPasswordValues
): Promise<EditPasswordValues> => {
  const { data } = await instance.put('users/password', values)
  return data
}

export const useUpdatePasswordMutation = (
  options?: UseMutationOptions<EditPasswordValues, Error, EditPasswordValues>
): UseMutationResult<EditPasswordValues, Error, EditPasswordValues> => {
  const { fetch } = useFetch()
  return useMutation(
    'updatePassword',
    (values: EditPasswordValues) => putPassword(fetch, values),
    options
  )
}

const postTeamAssignment = async (
  instance: AxiosInstance,
  values: TeamAssignmentValues
): Promise<TeamAssignmentValues> => {
  const { data } = await instance.post('/users/assign', values)
  return data
}

export const useTeamAssignmentMutation = (
  options?: UseMutationOptions<TeamAssignmentValues, Error, TeamAssignmentValues>
): UseMutationResult<TeamAssignmentValues, Error, TeamAssignmentValues> => {
  const { fetch } = useFetch()
  return useMutation(
    'assignToTeam',
    (values: TeamAssignmentValues) => postTeamAssignment(fetch, values),
    options
  )
}

const putSpecialty = async (
  instance: AxiosInstance,
  values: EditSpecialtyValues
): Promise<EditSpecialtyValues> => {
  const { data } = await instance.put('users/specialty', values)
  return data
}

export const useUpdateSpecialtyMutation = (
  options?: UseMutationOptions<EditSpecialtyValues, Error, EditSpecialtyValues>
): UseMutationResult<EditSpecialtyValues, Error, EditSpecialtyValues> => {
  const { fetch } = useFetch()
  return useMutation(
    'updateSpecialty',
    (values: EditSpecialtyValues) => putSpecialty(fetch, values),
    options
  )
}

const getTeamMembers = async (
  instance: AxiosInstance
): Promise<UserProfileValues[]> => {
  const { data } = await instance.get('users/team')
  return data
}

export const useTeamMembersQuery = (options?: Omit<UseQueryOptions<UserProfileValues[], unknown>, 'queryKey'>)
: UseQueryResult<UserProfileValues[], unknown> => {
  const { fetch } = useFetch()
  return useQuery('getTeam', () => getTeamMembers(fetch), options)
}