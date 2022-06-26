import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import * as S from './styles'
import { useParams } from 'react-router-dom'

interface LessonProps {
    title: string
    slugSelected: string
    availableAt: Date
    type: 'live' | 'class'
}

export function Lesson({title, slugSelected, availableAt, type}: LessonProps) {
    const { slug } = useParams<{slug: string}>()
    
    const isLessonAvailable = isPast(availableAt)
    const avaliableDateFormat = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR })
    const isActiveLesson = slug === slugSelected
  return (
    <S.Wrapper to={`/event/lesson/${slugSelected}`}>
        <S.Date>{avaliableDateFormat}</S.Date>
        <S.Content isActiveLesson={isActiveLesson}>
            <S.ContentHeader>
                {
                    isLessonAvailable ? (
                        <span className={`text-sm font-medium flex items-center gap-2 ${isActiveLesson ? 'text-white' : 'text-blue-500'}`}>
                            <CheckCircle size={20} />
                            Conteúdo Liberado
                        </span>
                        
                    ) : (

                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em Breve
                        </span>
                    )
                }
                <span className='text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold'>
                    {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                </span>
            </S.ContentHeader>
            <strong className={` mt-5 block  ${isActiveLesson ? 'text-white' : 'text-gray-200'}`}>
                {title}
            </strong>
        </S.Content>
    </S.Wrapper>
  )
}
