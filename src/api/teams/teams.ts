import { 
  useQuery,
  UseQueryOptions,
  UseQueryResult
} from 'react-query'
import { AxiosInstance } from 'axios'

import { useFetch } from '../../providers/FetchProvider'
import { TeamValues } from './types'

const getTeams = async (
  instance: AxiosInstance
): Promise<TeamValues[]> => {
  const { data } = await instance.get('teams')
  return data
}

export const useTeamsQuery = (options?: Omit<UseQueryOptions<TeamValues[], unknown>, 'queryKey'>)
: UseQueryResult<TeamValues[], unknown> => {
  const { fetch } = useFetch()
  return useQuery('getTeams', () => getTeams(fetch), options)
}