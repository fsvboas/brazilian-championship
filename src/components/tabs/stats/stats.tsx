import React from 'react'
import Row from '../../toolkit/row'
import { useGetAllStats } from '../../../hooks/stats/use-get-all-stats'
import Column from '../../toolkit/column'
import Image from '../../toolkit/image'
import { classNames } from '../../../core/helpers/class-names'
import Spinner from '../../toolkit/spinner'

export interface StatsTabProps {}
const StatsTab: React.FC<StatsTabProps> = () => {
  const { data: stats, isLoading } = useGetAllStats()

  return (
    <Column className="h-screen w-full p-8 text-light">
      <Row>
        <h4 className="text-light/60 text-sm font-medium">Gols</h4>
      </Row>
      <Row>
        <Column className="w-full">
          <Row className="w-full justify-between border-b border-light/10 py-2">
            <span className="text-light/60 text-xs font-medium">Jogador</span>
            <span className="text-light/60 text-xs font-medium">Gols</span>
          </Row>
          {isLoading && (
            <Column className={classNames('items-center text-light/60')}>
              <Spinner color="white" size={100} />
              Carregando estatísticas...
            </Column>
          )}
          {stats?.map((player) => (
            <Row
              key={player.atleta.atleta_id}
              className="py-2 justify-between border-b border-light/10"
            >
              <Row className="space-x-4">
                <span className="text-light/70">1</span>
                <Image
                  className="w-10"
                  src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
                  alt=""
                />
                <Column className="ml-3">
                  <h2 className="text-sm text-light/80">
                    {player.atleta.nome_popular}
                  </h2>
                  <Row className="space-x-1">
                    <Image
                      className="w-3"
                      src={player.time.escudo}
                      alt="https://www.clipartmax.com/png/small/142-1425462_escudo-clip-art-at-clker-escudo-medieval-em-png.png"
                    />
                    <span className="text-xs text-light/60">
                      {player.time.nome_popular}
                    </span>
                  </Row>
                </Column>
              </Row>
              <Row className="text-sm mr-1">{player.gols}</Row>
            </Row>
          ))}
        </Column>
      </Row>
    </Column>
  )
}

export default StatsTab
