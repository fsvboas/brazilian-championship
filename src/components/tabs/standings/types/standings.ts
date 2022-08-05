export type Standings = {
  posicao: number
  pontos: number
  time: {
    time_id: number
    nome_popular: string
    escudo: string
  }
  jogos: number
  vitorias: number
  empates: number
  derrotas: number
  gols_pro: number
  gols_contra: number
  saldo_gols: number
  ultimos_jogos: string[]
}
