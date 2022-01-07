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
import { TicketValues, CreateTicketValues, TicketStatus, AddCommentValues } from './types'

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

const postTicket = async (
  instance: AxiosInstance,
  values: CreateTicketValues
): Promise<CreateTicketValues> => {
  const { data } = await instance.post('tickets', values)
  return data
}

export const useCreateTicketMutation = (options?: UseMutationOptions<CreateTicketValues, Error, CreateTicketValues>)
: UseMutationResult<CreateTicketValues, Error, CreateTicketValues> => {
  const { fetch } = useFetch()
  return useMutation('createTicket', (values: CreateTicketValues) => postTicket(fetch, values), options)
}

const putTicketDetails = async (
  instance: AxiosInstance,
  values: CreateTicketValues,
  id: string,
): Promise<CreateTicketValues> => {
  const { data } = await instance.put(`tickets/details/${id}`, values)
  return data
}

export const useUpdateTicketDetailsMutation = (
  id: string,
  options?: UseMutationOptions<CreateTicketValues, Error, CreateTicketValues>
): UseMutationResult<CreateTicketValues, Error, CreateTicketValues> => {
  const { fetch } = useFetch()
  return useMutation(
    ['updateTicketDetails', id],
    (values: CreateTicketValues) => putTicketDetails(fetch, values, id),
    options
  )
}

const putTicketStatus = async (
  instance: AxiosInstance,
  values: TicketStatus,
  id: string,
): Promise<TicketStatus> => {
  const { data } = await instance.put(`tickets/status/${id}`, values)
  return data
}

export const useUpdateTicketStatusMutation = (
  id: string,
  options?: UseMutationOptions<TicketStatus, Error, TicketStatus>
): UseMutationResult<TicketStatus, Error, TicketStatus> => {
  const { fetch } = useFetch()
  return useMutation(
    ['updateTicketStatus', id],
    (values: TicketStatus) => putTicketStatus(fetch, values, id),
    options
  )
}

export const putComment = async (
  instance: AxiosInstance,
  values: AddCommentValues,
  id: string,
): Promise<AddCommentValues> => {
  const { data } = await instance.put(`tickets/comment/${id}`, values)
  return data
}

export const useCommentMutation = (
  id: string,
  options?: UseMutationOptions<AddCommentValues, Error, AddCommentValues>
): UseMutationResult<AddCommentValues, Error, AddCommentValues> => {
  const { fetch } = useFetch()
  return useMutation(
    ['addComment', id],
    (values: AddCommentValues) => putComment(fetch, values, id),
    options
  )
}