import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Video } from '../../components/Video'
import * as S from './styles'



export function Event() {

  const { slug } = useParams<{slug: string}>()


  return (
    <S.Wrapper>
      <Header />
      <S.Main>
        {slug ?  <Video lessonSlug={slug} /> : <div className='flex-1'></div>}
        <Sidebar />
      </S.Main>
    </S.Wrapper>
  )
}
