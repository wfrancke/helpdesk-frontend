import { useMutation, UseMutationOptions, UseMutationResult } from 'react-query'
import { AxiosInstance } from 'axios'

import { useFetch } from '../../providers/FetchProvider'
import { SignInResponse, SignInValues } from './types'

const postSignIn = async (
  instance: AxiosInstance,
  values: SignInValues
): Promise<SignInResponse> => {
  const { data } = await instance.post('/auth/login', values)
  return data
}

const useSignInMutation = (options: UseMutationOptions<SignInResponse, Error, SignInValues>)
: UseMutationResult<SignInResponse, Error, SignInValues> => {
  const { fetch } = useFetch()
  return useMutation('signIn', (values: SignInValues) => postSignIn(fetch, values), options)
}

export {
  useSignInMutation
}