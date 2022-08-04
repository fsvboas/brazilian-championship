import { CustomError } from '../../types/custom-error'
import getAllPlayersService, {
  Response,
} from '../../services/players/get-all-players'
import { useQuery } from 'react-query'

export const useGetAllPlayers = () => {
  const { data, error, isLoading } = useQuery<Response, CustomError>(
    '/mercado/destaques',
    () => getAllPlayersService()
  )

  return { data, error, isLoading }
}
