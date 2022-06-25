import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Video } from '../../components/Video'
import * as S from './styles'

export function Event() {
  return (
    <S.Wrapper>
      <Header />
      <S.Main>
        <Video />
        <Sidebar />
      </S.Main>
    </S.Wrapper>
  )
}
