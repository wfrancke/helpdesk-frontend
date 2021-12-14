import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
import { AxiosInstance } from 'axios'

import { useFetch } from '../../providers/FetchProvider'
import { SignUpValues } from './types'

const postSignUp = async (
  instance: AxiosInstance,
  values: SignUpValues
): Promise<SignUpValues> => {
  const { data } = await instance.post('/users', values)
  return data
}

export const useSignUpMutation = (options: UseMutationOptions<SignUpValues, Error, SignUpValues>)
: UseMutationResult<SignUpValues, Error, SignUpValues> => {
  const { fetch } = useFetch()
  return useMutation('signUp', (values: SignUpValues) => postSignUp(fetch, values), options)
}

const getProfile = async (
  instance: AxiosInstance
): Promise<SignUpValues> => {
  const { data } = await instance.get('/users/profile')
  return data
}

export const useProfileQuery = (options?: Omit<UseQueryOptions<SignUpValues, unknown>, 'queryKey'>)
: UseQueryResult<SignUpValues, unknown> => {
  const { fetch } = useFetch()
  return useQuery('getProfile', () => getProfile(fetch), options)
}