import React from 'react'
import Container from '../../toolkit/container'
import PlayersCard from './players-card'

export interface PlayersTabProps {}
const PlayersTab: React.FC<PlayersTabProps> = () => {
  return (
    <Container className="h-full w-full p-2 text-light flex justify-center">
      <PlayersCard />
    </Container>
  )
}

export default PlayersTab
