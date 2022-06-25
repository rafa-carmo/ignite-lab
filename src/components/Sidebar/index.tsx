import { Lesson } from '../Lesson'
import * as S from './styles'

export function Sidebar() {
  return (
  <S.Wrapper>
    <S.Title>Cronograma de aulas.</S.Title>

    <S.LessonList>
      <Lesson title='Abertura do evento Ignite lab' availableAt={new Date()} slug="Aula 01" type='class' />

    </S.LessonList>
  </S.Wrapper>
  )
}
