import { handleError } from '../../../../core/helpers/handle-error'
import { playersApi } from '../../../../core/lib/playersApi'
import { Players } from '../types/players'

export type Params = null
export type Response = Players[]
type ServiceType = (params?: Params) => Promise<Response>
const getAllPlayersService: ServiceType = async (params) => {
  try {
    const response = await playersApi.get<Players[]>('/mercado/destaques', {
      params,
    })

    return response.data
  } catch (error: any) {
    throw handleError(error)
  }
}

export default getAllPlayersService
