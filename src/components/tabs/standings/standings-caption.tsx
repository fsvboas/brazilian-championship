import React from 'react'
import Row from '../../toolkit/row'
import Column from '../../toolkit/column'
import {
  CheckCircleIcon,
  MinusCircleIcon,
  XCircleIcon,
} from '@heroicons/react/solid'

export interface StandingsCaptionProps {}
const StandingsCaption: React.FC<StandingsCaptionProps> = () => {
  return (
    <Row>
      <div className="flex flex-col sm:flex-row bg-light/10 my-4 sm:mx-2 p-4 rounded w-full h-34 space-y-4 sm:space-y-0">
        <Column className="mr-24">
          <h3 className="font-medium">Qualificação/Rebaixamento</h3>
          <ul className="list-square list-inside truncate">
            <li className="marker:text-blue-500 marker:text-lg text-sm">
              Fase de grupo da Libertadores
            </li>
            <li className="marker:text-orange-500 marker:text-lg text-sm">
              Qualificatórias da Copa Libertadores
            </li>
            <li className="marker:text-green-500 marker:text-lg text-sm">
              Qualificatórias da Copa Sul-Americana
            </li>
            <li className="marker:text-red-500 marker:text-lg text-sm">
              Rebaixamento
            </li>
          </ul>
        </Column>
        <Column>
          <h3 className="font-medium truncate">Últimas cinco partidas</h3>
          <ul>
            <Row className="space-x-2 mt-2">
              <CheckCircleIcon className="h-5 text-green-500" />
              <li>Vitória</li>
            </Row>
            <Row className="space-x-2">
              <MinusCircleIcon className="h-5 text-light/60" />
              <li>Empate</li>
            </Row>
            <Row className="space-x-2">
              <XCircleIcon className="h-5 text-red-500" />
              <li>Derrotas</li>
            </Row>
          </ul>
        </Column>
      </div>
    </Row>
  )
}

export default StandingsCaption
