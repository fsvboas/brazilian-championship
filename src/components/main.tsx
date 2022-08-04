import React from 'react'
import { classNames } from '../core/helpers/class-names'
import PlayersTab from './tabs/players/players'
import StandingsTab from './tabs/standings/standings'
import StatsTab from './tabs/stats/stats'
import Stats from './tabs/stats/stats'
import Column from './toolkit/column'
import Image from './toolkit/image'
import Row from './toolkit/row'

const Main: React.FC = ({}) => {
  const [activeTab, setActiveTab] = React.useState('matches')

  return (
    <Column className="h-full bg-secondary">
      <Column className="bg-primary space-y-2 border-b-4 border-dark shadow-sm">
        <Row className="text-light p-4 space-x-2">
          <h1 className="font-medium">Brasileirão Série B</h1>
        </Row>
        <nav className="flex justify-center">
          <ul className="flex w-full lg:w-[800px] justify-between uppercase font-medium text-sm">
            <li
              className={classNames(
                'w-40 text-center cursor-pointer text-light/80 p-2',
                activeTab === 'matches'
                  ? 'text-light/100 border-b-2'
                  : 'border-primary'
              )}
              onClick={() => {
                setActiveTab('matches')
              }}
            >
              Partidas
            </li>
            <li
              className={classNames(
                'w-40 text-center cursor-pointer text-light/80 p-2',
                activeTab === 'standings'
                  ? 'text-light/100 border-b-2'
                  : 'border-primary'
              )}
              onClick={() => {
                setActiveTab('standings')
              }}
            >
              Classificação
            </li>
            <li
              className={classNames(
                'w-40 text-center cursor-pointer text-light/80 p-2',
                activeTab === 'stats'
                  ? 'text-light/100 border-b-2'
                  : 'border-primary'
              )}
              onClick={() => {
                setActiveTab('stats')
              }}
            >
              Estatísticas
            </li>
            <li
              className={classNames(
                'w-40 text-center cursor-pointer text-light/80 p-2',
                activeTab === 'players'
                  ? 'text-light/100 border-b-2'
                  : 'border-primary'
              )}
              onClick={() => {
                setActiveTab('players')
              }}
            >
              Jogadores
            </li>
          </ul>
        </nav>
      </Column>
      <Row className="flex justify-center">
        <Row className="bg-dark w-full lg:w-[800px] h-screen justify-center">
          {activeTab === 'matches' ? (
            <p>Tab de partidas</p>
          ) : activeTab === 'standings' ? (
            <StandingsTab />
          ) : activeTab === 'stats' ? (
            <StatsTab />
          ) : activeTab === 'players' ? (
            <PlayersTab />
          ) : (
            ''
          )}
        </Row>
      </Row>
    </Column>
  )
}

export default Main
