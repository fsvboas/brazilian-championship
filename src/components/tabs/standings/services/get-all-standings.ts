import { handleError } from '../../../../core/helpers/handle-error'
import { api } from '../../../../core/lib/api'
import { Standings } from '../types/standings'

export type Params = null
export type Response = Standings[]
type ServiceType = (params?: Params) => Promise<Response>
const getAllStandingsService: ServiceType = async (params) => {
  try {
    const response = await api.get<Standings[]>('/campeonatos/14/tabela', {
      params,
    })

    return response.data
  } catch (error: any) {
    throw handleError(error)
  }
}

export default getAllStandingsService
