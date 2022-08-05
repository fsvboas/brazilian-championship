import React from 'react'
import Row from '../../toolkit/row'
import { useGetAllStandings } from './hooks/use-get-all-standings'
import Column from '../../toolkit/column'
import Image from '../../toolkit/image'
import {
  CheckCircleIcon,
  MinusCircleIcon,
  XCircleIcon,
} from '@heroicons/react/solid'
import Container from '../../toolkit/container'
import Spinner from '../../toolkit/spinner'
import { classNames } from '../../../core/helpers/class-names'
import StandingsCaption from './standings-caption'

export interface StandingsTabProps {}
const StandingsTab: React.FC<StandingsTabProps> = () => {
  const { data: standings, isLoading } = useGetAllStandings()

  return (
    <Container className="h-full">
      <Column className="text-light/60">
        <Row className="bg-secondary">
          <Column className="py-2 px-6">
            <h4 className="text-xs text-light/60">Temporada</h4>
            <h4 className="text-blue-500 font-medium text-sm">2723</h4>
          </Column>
        </Row>
        <Row className="justify-between p-2 border-b border-light/20">
          <Row>
            <h3 className="text-sm px-2">Clube</h3>
          </Row>
          <Row className="w-96 text-center">
            <span className="w-8 text-sm">Pts</span>
            <span className="w-8 text-sm">PJ</span>
            <span className="w-8 text-sm">VIT</span>
            <span className="w-8 text-sm">E</span>
            <span className="w-8 text-sm">DER</span>
            <span className="w-8 text-sm">GP</span>
            <span className="w-8 text-sm">GC</span>
            <span className="w-8 text-sm">SG</span>
            <span className="w-28 text-sm">Últimas cinco</span>
          </Row>
        </Row>
        <Column>
          {isLoading && (
            <Column className={classNames('items-center h-screen')}>
              <Spinner color="white" size={100} />
              Carregando tabela...
            </Column>
          )}
          {standings?.map((club) => (
            <Row
              key={club.time.time_id}
              className={`justify-between p-2 border-b border-l-4 border-light/20 ${
                club.posicao < 5
                  ? ' border-l-blue-500'
                  : club.posicao < 7
                  ? 'border-l-orange-500'
                  : club.posicao < 13
                  ? 'border-l-green-500'
                  : club.posicao > 16
                  ? 'border-l-red-500'
                  : 'border-l-dark'
              }`}
            >
              <Row className="w-20 sm:w-48 truncate">
                <span className="w-4 text-center">{club.posicao}</span>
                <Image
                  className="w-7 h-7 mx-2"
                  src={club.time.escudo}
                  alt="Escudo"
                />
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
                <Row className="w-28 justify-center pt-1">
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
        <StandingsCaption />
      </Column>
    </Container>
  )
}

export default StandingsTab
