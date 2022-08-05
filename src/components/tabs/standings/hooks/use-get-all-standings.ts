import { CustomError } from '../../../../core/types/custom-error'
import getAllStandingsService, {
  Response,
} from '../services/get-all-standings'
import { useQuery } from 'react-query'

export const useGetAllStandings = () => {
  const { data, error, isLoading } = useQuery<Response, CustomError>(
    '/campeonatos/14/tabela',
    () => getAllStandingsService()
  )

  return { data, error, isLoading }
}
