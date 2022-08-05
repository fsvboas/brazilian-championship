import { handleError } from '../../../../core/helpers/handle-error'
import { api } from '../../../../core/lib/api'
import { Stats } from '../types/stats'

export type Params = null
export type Response = Stats[]
type ServiceType = (params?: Params) => Promise<Response>
const getAllStatsService: ServiceType = async (params) => {
  try {
    const response = await api.get<Stats[]>('/campeonatos/14/artilharia', {
      params,
    })

    return response.data
  } catch (error: any) {
    throw handleError(error)
  }
}

export default getAllStatsService
