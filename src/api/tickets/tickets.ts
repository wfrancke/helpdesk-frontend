import { 
  useQuery,
  UseQueryOptions,
  UseQueryResult
} from 'react-query'
import { AxiosInstance } from 'axios'

import { useFetch } from '../../providers/FetchProvider'
import { TicketValues } from './types'

const getTicket = async (
  instance: AxiosInstance,
  id: string
): Promise<TicketValues> => {
  const { data } = await instance.get(`tickets/id/${id}`)
  return data
}

export const useTicketQuery = (id: string, options?: Omit<UseQueryOptions<TicketValues, unknown>, 'queryKey'>)
: UseQueryResult<TicketValues, unknown> => {
  const { fetch } = useFetch()
  return useQuery(['getTicket', id], () => getTicket(fetch, id), options)
}

const getMyTickets = async (
  instance: AxiosInstance
): Promise<TicketValues[]> => {
  const { data } = await instance.get('tickets/requested')
  return data
}

export const useMyTicketsQuery = (options?: Omit<UseQueryOptions<TicketValues[], unknown>, 'queryKey'>)
: UseQueryResult<TicketValues[], unknown> => {
  const { fetch } = useFetch()
  return useQuery('getMyTickets', () => getMyTickets(fetch), options)
}

const getMyAssignedTickets = async (
  instance: AxiosInstance
): Promise<TicketValues[]> => {
  const { data } = await instance.get('tickets/assigned')
  return data
}

export const useMyAssignedTicketsQuery = (options?: Omit<UseQueryOptions<TicketValues[], unknown>, 'queryKey'>)
: UseQueryResult<TicketValues[], unknown> => {
  const { fetch } = useFetch()
  return useQuery('getMyAssignedTickets', () => getMyAssignedTickets(fetch), options)
}

const getAssignedTickets = async (
  instance: AxiosInstance,
  id: string,
): Promise<TicketValues[]> => {
  const { data } = await instance.get(`tickets/assigned/${id}`)
  return data
}

export const useAssignedTicketsQuery = (id: string, options?: Omit<UseQueryOptions<TicketValues[], unknown>, 'queryKey'>)
: UseQueryResult<TicketValues[], unknown> => {
  const { fetch } = useFetch()
  return useQuery(['getAssignedTickets', id], () => getAssignedTickets(fetch, id), options)
}