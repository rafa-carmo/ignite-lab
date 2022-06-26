import tw from 'tailwind-styled-components'

export const Wrapper = tw.div`
    min-h-screen
    w-full
    bg-blur
    bg-cover
    bg-no-repeat
    flex
    flex-col
    items-center
`

export const Title = tw.h1`
    mt-8
    text-[2.5rem]
    leading-tight
`

export const TitleStrong = tw.strong`
    text-blue-500
`

export const Detail = tw.p`
    mt-4
    text-gray-200
    leading-relaxed
`


export const FormContainer = tw.div`
    p-8
    bg-gray-700
    border
    border-gray-500
    rounded
`

export const Input = tw.input`
    bg-gray-900
    rounded
    px-5
    h-14
`
export const Button = tw.button`
    mt-4
    bg-green-500
    uppercase
    py-4
    rounded
    font-bold
    text-small
    hover:bg-green-700
    transition-colors
    disabled:opacity-50
`