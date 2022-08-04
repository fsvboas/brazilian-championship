import React from 'react'
import Row from '../../toolkit/row'
import { useGetAllStandings } from '../../../hooks/standings/use-get-all-standings'
import Column from '../../toolkit/column'
import Image from '../../toolkit/image'
import {
  CheckCircleIcon,
  MinusCircleIcon,
  XCircleIcon,
} from '@heroicons/react/solid'

export interface StandingsTabProps {}
const StandingsTab: React.FC<StandingsTabProps> = () => {
  const { data: standings, isLoading } = useGetAllStandings()

  return (
    <Column className="h-full w-full p-8 text-light">
      <Row className="bg-secondary">
        <Column>
          <span>Season</span>
          <span>2022</span>
        </Column>
      </Row>
      <Row className="justify-between">
        <Row>
          <h3>Clube</h3>
        </Row>
        <Row className="w-96 text-center">
          <span className="w-8">Pts</span>
          <span className="w-8">PJ</span>
          <span className="w-8">VIT</span>
          <span className="w-8">E</span>
          <span className="w-8">DER</span>
          <span className="w-8">GP</span>
          <span className="w-8">GC</span>
          <span className="w-8">SG</span>
          <span className="w-28">Últimas cinco</span>
        </Row>
      </Row>
      <Column>
        {standings?.map((club) => (
          <Row key={club.time.time_id} className="justify-between">
            <Row>
              <span>{club.posicao}</span>
              <Image className="w-7" src={club.time.escudo} alt="" />
              <h2>{club.time.nome_popular}</h2>
            </Row>
            <Row className="w-96 text-center">
              <span className="w-8">{club.pontos}</span>
              <span className="w-8">{club.jogos}</span>
              <span className="w-8">{club.vitorias}</span>
              <span className="w-8">{club.empates}</span>
              <span className="w-8">{club.derrotas}</span>
              <span className="w-8">{club.gols_pro}</span>
              <span className="w-8">{club.gols_contra}</span>
              <span className="w-8">{club.saldo_gols}</span>
              <Row className="w-28 justify-center">
                {club.ultimos_jogos.map((lastGames) =>
                  lastGames === 'v' ? (
                    <CheckCircleIcon className="h-5 text-green-500" />
                  ) : lastGames === 'e' ? (
                    <MinusCircleIcon className="h-5 text-light/60" />
                  ) : lastGames === 'd' ? (
                    <XCircleIcon className="h-5 text-red-500" />
                  ) : (
                    ''
                  )
                )}
              </Row>
            </Row>
          </Row>
        ))}
      </Column>
    </Column>
  )
}

export default StandingsTab
