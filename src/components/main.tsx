import React from 'react'
import { classNames } from '../core/helpers/class-names'
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
          <Image
            className="w-6"
            src="https://upload.wikimedia.org/wikipedia/pt/f/f4/Campeonato_Brasileiro_S%C3%A9rie_B_logo.png"
            alt=""
          />
          <h1 className="font-medium">Brasileirão Série B</h1>
        </Row>
        <nav className="flex justify-center">
          <ul className="flex w-full lg:w-[40%] justify-between uppercase font-medium text-sm">
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
        <Row className="bg-dark w-full lg:w-[40%] h-screen justify-center">
          {activeTab === 'matches' ? (
            <p>Tab de partidas</p>
          ) : activeTab === 'standings' ? (
            <p>Tab de posições</p>
          ) : activeTab === 'stats' ? (
            <StatsTab />
          ) : activeTab === 'players' ? (
            <p>Tab de jogadores</p>
          ) : (
            ''
          )}
        </Row>
      </Row>
    </Column>
  )
}

export default Main
