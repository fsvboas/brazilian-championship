import React from 'react'
import { classNames } from '../core/helpers/class-names'
import Column from './toolkit/column'
import Row from './toolkit/row'

const Main: React.FC = ({}) => {
  const [activeTab, setActiveTab] = React.useState('matches')

  return (
    <Column className="h-full bg-secondary">
      <Column className="bg-primary space-y-8">
        <Row className="text-light p-4">Brasileirão Série B</Row>
        <nav className="flex justify-center">
          <ul className="flex space-x-8 w-full md:w-1/2 justify-between">
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
        <Row className="bg-dark/50 w-full md:w-1/2 h-screen justify-center">
          {activeTab === 'matches' ? (
            <p>Tab de partidas</p>
          ) : activeTab === 'standings' ? (
            <p>Tab de posições</p>
          ) : activeTab === 'stats' ? (
            <p>Tab de estatísticas</p>
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
