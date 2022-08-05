import { CustomError } from '../../../../core/types/custom-error'
import getAllStatsService, {
  Response,
} from '../services/get-all-stats'
import { useQuery } from 'react-query'

export const useGetAllStats = () => {
  const { data, error, isLoading } = useQuery<Response, CustomError>(
    '/campeonatos/14/artilharia',
    () => getAllStatsService()
  )

  return { data, error, isLoading }
}
