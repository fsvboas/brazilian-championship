import { CustomError } from '../../../../core/types/custom-error'
import getAllPlayersService, {
  Response,
} from '../services/get-all-players'
import { useQuery } from 'react-query'

export const useGetAllPlayers = () => {
  const { data, error, isLoading } = useQuery<Response, CustomError>(
    '/mercado/destaques',
    () => getAllPlayersService()
  )

  return { data, error, isLoading }
}
