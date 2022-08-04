import React from 'react'
import { useGetAllPlayers } from '../../../hooks/players/use-get-all-players'
import Column from '../../toolkit/column'
import Container from '../../toolkit/container'
import Image from '../../toolkit/image'
import Row from '../../toolkit/row'

export interface PlayersTabProps {}
const PlayersTab: React.FC<PlayersTabProps> = () => {
  const { data: players, isLoading } = useGetAllPlayers()

  return (
    <Container className="h-full w-full p-2 text-light flex justify-center">
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
            <h3>{player.Atleta.nome}</h3>
            <Row className="w-full">
              <Image className="w-4" src={player.escudo_clube} alt="" />
              <span>{player.clube_nome}</span>
            </Row>
          </Column>
        ))}
      </Row>
    </Container>
  )
}

export default PlayersTab
