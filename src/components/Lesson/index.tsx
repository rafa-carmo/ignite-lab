import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import * as S from './styles'

interface LessonProps {
    title: string
    slug: string
    availableAt: Date
    type: 'live' | 'class'
}

export function Lesson({title, slug, availableAt, type}: LessonProps) {
    const isLessonAvailable = isPast(availableAt)
    const avaliableDateFormat = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR })

  return (
    <S.Wrapper to={`/event/lesson/${slug}`}>
        <S.Date>{avaliableDateFormat}</S.Date>
        <S.Content>
            <S.ContentHeader>
                {
                    isLessonAvailable ? (
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
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
            <strong className="text-gray-200 mt-5 block">
                {title}
            </strong>
        </S.Content>
    </S.Wrapper>
  )
}
