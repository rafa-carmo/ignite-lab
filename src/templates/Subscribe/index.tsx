import { useMutation, gql } from '@apollo/client';
import { useState, FormEvent, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../components/Logo'
import * as S from './styles'

const CREATE_SUBSCRIBER_MUTATION = gql`
mutation CreateSubscriber($name: String!, $email: String!) {
  createSubscriber(data: {name: $name, email: $email}){
    id
  }
}`


export function Subscribe() {
  const [name, setName] = useState<String|null>(null)
  const [email, setEmail] = useState<String|null>(null)
  const navigate = useNavigate()

  const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    await createSubscriber({ variables: { name, email } })
    navigate('/event')
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    if (name === 'name') {
      setName(value)
    } else if (name === 'email') {
      setEmail(value)
    }
  }
  return (
  <S.Wrapper>
    <div className='w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto'>
      <div className='max-w-[640px] '>
        <Logo />
        <S.Title>Construa uma <S.TitleStrong>aplicação completa</S.TitleStrong>, do zero, com <S.TitleStrong>React</S.TitleStrong></S.Title>
        <S.Detail>Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</S.Detail>
      </div>
        
      <S.FormContainer>
        <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full'>
          <S.Input type='text' name="name" onChange={handleChange} placeholder='Seu nome completo' />
          <S.Input type='email' name="email" onChange={handleChange} placeholder='Digite seu email' />

          <S.Button disabled={loading} type='submit'>Garantir minha vaga</S.Button>
        </form>
      </S.FormContainer>
    </div>
    <img src="/src/assets/code-mockup.png" alt="Image from vscode with code write" />
  </S.Wrapper>
  )
}
