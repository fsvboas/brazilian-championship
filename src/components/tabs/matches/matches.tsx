import Column from '../../toolkit/column'
import Container from '../../toolkit/container'
import Row from '../../toolkit/row'
import MatchesCard from './matches-card'

export interface MatchesTabProps {}
const MatchesTab: React.FC<MatchesTabProps> = () => {
  return (
    <Container className="h-screen w-full text-light">
      <Column>
        <Row className="bg-black/40 w-full h-10 border-y border-light/20 pt-2 pl-6">
          <span className="text-sm text-light/60">Rodada 1 de 20</span>
        </Row>
        <MatchesCard />
      </Column>
    </Container>
  )
}

export default MatchesTab
