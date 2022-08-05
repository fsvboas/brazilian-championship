import Column from '../../toolkit/column'
import Container from '../../toolkit/container'
import Image from '../../toolkit/image'
import Row from '../../toolkit/row'

export interface MatchesCardProps {}
const MatchesCard: React.FC<MatchesCardProps> = () => {
  return (
    <Container className="h-28 grid grid-cols-2">
      {matchesList?.map((match) => (
        <Row className="h-full w-full justify-between border border-light/20 p-6 space-x-2 sm:space-x-4 text-light/60">
          <Column className="h-full justify-center ">
            <Column className="space-y-2 w-20 sm:w-full">
              <Row className="space-x-2 justify-center sm:justify-start">
                <Image className="w-6" src={match.escudo1} alt="escudo" />
                <span className="hidden sm:block">{match.time1}</span>
              </Row>
              <Row className="space-x-2 justify-center sm:justify-start">
                <Image className="w-6" src={match.escudo2} alt="escudo" />
                <span className="hidden sm:block">{match.time2}</span>
              </Row>
            </Column>
          </Column>
          <Column className="text-center justify-center border-l border-light/20 text-sm pl-4 w-24">
            <span>{match.data}</span>
            <span>{match.horário}</span>
          </Column>
        </Row>
      ))}
    </Container>
  )
}

export default MatchesCard

export const matchesList = [
  {
    time1: 'Juventude',
    time2: 'América-MG',
    escudo1:
      'https://ssl.gstatic.com/onebox/media/sports/logos/JrXw-m4Dov0gE2Sh6XJQMQ_48x48.png',
    escudo2:
      'https://ssl.gstatic.com/onebox/media/sports/logos/ZFsHqGsKNQPlCQjZ4Lu-EQ_48x48.png',
    data: 'Sáb., 06/08',
    horário: '16:30',
  },
  {
    time1: 'Avaí',
    time2: 'Corinthians',
    escudo1:
      'https://ssl.gstatic.com/onebox/media/sports/logos/9cwCmoBXGaPJ_Q5cgUeocg_48x48.png',
    escudo2:
      'https://ssl.gstatic.com/onebox/media/sports/logos/tCMSqgXVHROpdCpQhzTo1g_48x48.png',
    data: 'Sáb., 06/08',
    horário: '19:00',
  },
  {
    time1: 'São Paulo',
    time2: 'Flamengo',
    escudo1:
      'https://ssl.gstatic.com/onebox/media/sports/logos/4w2Z97Hf9CSOqICK3a8AxQ_48x48.png',
    escudo2:
      'https://ssl.gstatic.com/onebox/media/sports/logos/orE554NToSkH6nuwofe7Yg_48x48.png',
    data: 'Sáb., 06/08',
    horário: '20:30',
  },
  {
    time1: 'Palmeiras',
    time2: 'Goiás',
    escudo1:
      'https://ssl.gstatic.com/onebox/media/sports/logos/7spurne-xDt2p6C0imYYNA_48x48.png',
    escudo2:
      'https://ssl.gstatic.com/onebox/media/sports/logos/gb8bo2x00XsbvsVp9nGniA_48x48.png',
    data: 'Dom., 07/08',
    horário: '16:00',
  },
  {
    time1: 'Atlético-MG',
    time2: 'Athletico-PR',
    escudo1:
      'https://ssl.gstatic.com/onebox/media/sports/logos/q9fhEsgpuyRq58OgmSndcQ_48x48.png',
    escudo2:
      'https://ssl.gstatic.com/onebox/media/sports/logos/LtpA9v-CQ_Qs2bgWVdDXxQ_48x48.png',
    data: 'Sáb., 07/08',
    horário: '19:00',
  },
  {
    time1: 'Botafogo',
    time2: 'Ceará SC',
    escudo1:
      'https://ssl.gstatic.com/onebox/media/sports/logos/KLDWYp-H8CAOT9H_JgizRg_48x48.png',
    escudo2:
      'https://ssl.gstatic.com/onebox/media/sports/logos/mSl0cz3i2t8uv4zcprobOg_48x48.png',
    data: 'Sáb., 06/08',
    horário: '16:30',
  },
  {
    time1: 'Atlético-GO',
    time2: 'Bragantino',
    escudo1:
      'https://ssl.gstatic.com/onebox/media/sports/logos/9mqMGndwoR9og_Z0uEl2kw_48x48.png',
    escudo2:
      'https://ssl.gstatic.com/onebox/media/sports/logos/lMyw2zn1Z4cdkaxKJWnsQw_48x48.png',
    data: 'Sáb., 06/08',
    horário: '19:00',
  },
  {
    time1: 'Fluminense',
    time2: 'Cuiabá',
    escudo1:
      'https://ssl.gstatic.com/onebox/media/sports/logos/fCMxMMDF2AZPU7LzYKSlig_48x48.png',
    escudo2:
      'https://ssl.gstatic.com/onebox/media/sports/logos/j6U8Rgt_6yyf0Egs9nREXw_48x48.png',
    data: 'Dom., 07/08',
    horário: '16:00',
  },
  {
    time1: 'Fortaleza',
    time2: 'Internacional',
    escudo1:
      'https://ssl.gstatic.com/onebox/media/sports/logos/me10ephzRxdj45zVq1Risg_48x48.png',
    escudo2:
      'https://ssl.gstatic.com/onebox/media/sports/logos/OWVFKuHrQuf4q2Wk0hEmSA_48x48.png',
    data: 'Dom., 07/08',
    horário: '18:00',
  },
  {
    time1: 'Coritiba',
    time2: 'Santos',
    escudo1:
      'https://ssl.gstatic.com/onebox/media/sports/logos/LaFlBADLmsjHfGTehCYtuA_48x48.png',
    escudo2:
      'https://ssl.gstatic.com/onebox/media/sports/logos/VHdNOT6wWOw_vJ38GMjMzg_48x48.png',
    data: 'Seg., 08/08',
    horário: '20:00',
  },
]
