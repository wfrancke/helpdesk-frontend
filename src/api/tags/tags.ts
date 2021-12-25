import { 
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  UseQueryOptions,
  UseQueryResult
} from 'react-query'
import { AxiosInstance } from 'axios'

import { useFetch } from '../../providers/FetchProvider'
import { TagValues, AddTagValues } from './types'

const getTags = async (
  instance: AxiosInstance
): Promise<TagValues[]> => {
  const { data } = await instance.get('tags')
  return data
}

export const useTagsQuery = (options?: Omit<UseQueryOptions<TagValues[], unknown>, 'queryKey'>)
: UseQueryResult<TagValues[], unknown> => {
  const { fetch } = useFetch()
  return useQuery('getTags', () => getTags(fetch), options)
}

const postTag = async (
  instance: AxiosInstance,
  values: AddTagValues
): Promise<AddTagValues> => {
  const { data } = await instance.post('tags', values)
  return data
}

export const useAddTagMutation = (options?: UseMutationOptions<AddTagValues, Error, AddTagValues>)
: UseMutationResult<AddTagValues, Error, AddTagValues> => {
  const { fetch } = useFetch()
  return useMutation('signUp', (values: AddTagValues) => postTag(fetch, values), options)
}