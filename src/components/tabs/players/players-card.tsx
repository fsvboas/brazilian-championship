import React from 'react'
import { useGetAllPlayers } from '../../../hooks/players/use-get-all-players'
import Column from '../../toolkit/column'
import Image from '../../toolkit/image'
import Row from '../../toolkit/row'

export interface PlayersCardProps {}
const PlayersCard: React.FC<PlayersCardProps> = () => {
  const { data: players, isLoading } = useGetAllPlayers()

  return (
    <Row className="grid gap-3 h-fit grid-cols-3 md:grid-cols-6">
      {players?.map((player) => (
        <Column
          className="border-2 rounded-xl w-28 h-52 overflow-hidden"
          key={player.Atleta.atleta_id}
        >
          <Image
            className="w-fit h-fit"
            src="https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg"
            alt=""
          />
          <Column className="w-full h-full space-y-2 p-2">
            <Row>
              <p className="truncate">{player.Atleta.nome}</p>
            </Row>
            <Row>
              <span className="text-sm">{player.posicao}</span>
            </Row>
            <Row className="w-full space-x-2">
              <Image className="w-4" src={player.escudo_clube} alt="" />
              <span className="truncate">{player.clube_nome}</span>
            </Row>
          </Column>
        </Column>
      ))}
    </Row>
  )
}

export default PlayersCard
