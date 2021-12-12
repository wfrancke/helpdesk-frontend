import { useEffect, useMemo } from 'react'
import Axios from 'axios'
import constate from 'constate'

import { useUserAccessToken } from './AuthProvider'

const useFetchHelper = () => {
  const accessToken = useUserAccessToken()

  const fetch = useMemo(() => {
    const instance = Axios.create({
      baseURL: 'http://localhost:3000/'
    })
    return instance
  }, [])

  useEffect(() => {
    const requestInterceptor = fetch.interceptors.request.use((request) => {
      if (accessToken && request.headers) {
        request.headers.Authorization = `Bearer ${accessToken}`
      }

      return request
    })

    return () => {
      fetch.interceptors.request.eject(requestInterceptor)
    }
  }, [accessToken, fetch.interceptors.request])

  return { fetch }
}

const [FetchProvider, useFetch] = constate(
  useFetchHelper,
  value => ({ fetch: value.fetch }),
)

export { FetchProvider, useFetch }