import { DefaultUi, Player, Youtube } from '@vime/react'
import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react'
import * as S from './styles'

import '@vime/core/themes/default.css'
import { gql, useQuery } from '@apollo/client'
import { PlayerVideo } from '../PlayerVideo'


const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: {slug: $slug}) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }

`

interface GetLessonBySlugResponse {
  lesson: {
    title: string
    videoId: string
    description: string
    teacher: {
      bio: string
      avatarURL: string
      name: string
    }
  }
}

interface VideoProps {
  lessonSlug: string
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: lessonSlug
    }
  })
  if(!data) return(<div className='flex-1'> Carregando </div>)
  return (
  <S.Wrapper>
    <div className='bg-black flex justify-center'>
      <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video bg-gray-500'>
      <PlayerVideo videoId={data.lesson.videoId} />
      </div>
    </div>

    <S.Content>
      <S.InfoSection>
        <S.InfoDescriptionContent>
          <S.Title>{data.lesson.title}</S.Title>
          <S.Description>{data.lesson.description}</S.Description>

          <S.TeacherContainer>
            <img 
              className='h-16 w-16 rounded-full border-2 border-blue-500'
              src={data.lesson.teacher.avatarURL}
              alt={data.lesson.teacher.name} 
            />
            <div className='leading-relaxed'>
              <strong className='font-bold text-2xl block'>{data.lesson.teacher.name}</strong>
              <span className='text-gray-200 text-sm block'>{data.lesson.teacher.bio}</span>
            </div>
          </S.TeacherContainer>
        </S.InfoDescriptionContent>
        <S.ButtonContent>

          <S.Button href="#" className='bg-green-500 hover:bg-green-700'>
            <DiscordLogo size={24} />
            Comunidade do Discord
          </S.Button>

          <S.Button href="#" className='border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-900'>
            <Lightning size={24} />
            Acesse o desafio
          </S.Button>
        </S.ButtonContent>

      </S.InfoSection>

      <S.MaterialSection>

        <S.MaterialButton href="#">
          <S.MaterialIconContainer>
            <FileArrowDown size={40} />
          </S.MaterialIconContainer>

          <S.MaterialDescription>
            <strong className='text-2xl'>Material complementar</strong>
            <p className='text-sm text-gray-200 mt-2'>
              Acesse o material complementar para acelerar o seu desenvolvimento
            </p>
          </S.MaterialDescription>

          <S.MaterialArrow>
            <CaretRight size={24} />
          </S.MaterialArrow>
        </S.MaterialButton>


        <S.MaterialButton href="#">
          <S.MaterialIconContainer>
            <Image size={40} />
          </S.MaterialIconContainer>

          <S.MaterialDescription>
            <strong className='text-2xl'>Wallpapers exclusivos</strong>
            <p className='text-sm text-gray-200 mt-2'>
              Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
            </p>
          </S.MaterialDescription>

          <S.MaterialArrow>
            <CaretRight size={24} />
          </S.MaterialArrow>
        </S.MaterialButton>


        <S.MaterialButton href="#"></S.MaterialButton>
      </S.MaterialSection>
    </S.Content>
  </S.Wrapper>
  )
}
