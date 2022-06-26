import { gql, useQuery } from '@apollo/client';
import { Lesson } from '../Lesson'
import * as S from './styles'

const GET_LESSONS_QUERY = gql`
  query {
  lessons(orderBy: availableAt_ASC) {
    slug
    title
    lessonType
    id
    availableAt
  }
}
`

interface GetLessonsResponse {
  lessons: {
    id: string
    slug: string
    title: string
    availableAt: string
    lessonType: 'live' | 'class'
  }[]
}


export function Sidebar() {

  const { data } = useQuery<GetLessonsResponse>(GET_LESSONS_QUERY)

  return (
  <S.Wrapper>
    <S.Title>Cronograma de aulas.</S.Title>

    <S.LessonList>
      {data?.lessons.map(lesson => (
          <Lesson key={lesson.id} title={lesson.title} availableAt={new Date(lesson.availableAt)} slug={lesson.slug} type={lesson.lessonType} /> 
      ))}
    </S.LessonList>
  </S.Wrapper>
  )
}
