import tw from 'tailwind-styled-components'

export const Wrapper = tw.div`
    flex-1
`

export const Content = tw.div`
    p-8
    max-w-[1100px]
    mx-auto
`

export const InfoSection = tw.div`
    flex
    items-start
    gap-16
`

export const InfoDescriptionContent = tw.div`
    flex-1
`

export const Title = tw.h1`
    text-2xl
    font-bold
`
export const Description = tw.p`
    mt-4
    text-gray-200
    leading-relaxed
`

export const TeacherContainer = tw.div`
    flex
    items-center
    gap-4
    mt-6

`

export const ButtonContent = tw.div`
    flex
    flex-col
    gap-4
`

export const Button = tw.a`
    p-4 
    text-small
    flex 
    items-center 
    rounded 
    font-bold 
    uppercase 
    gap-2 
    justify-center
    transition-colors
    duration-200
`

export const MaterialSection = tw.div`
    gap-8
    mt-20
    grid
    grid-cols-2
`

export const MaterialButton = tw.a`
    bg-gray-700
    rounded
    overflow-hidden
    flex
    items-stretch
    gap-6
    hover:bg-gray-600
    transition-colors
`

export const MaterialIconContainer = tw.div`
    bg-green-700
    h-full
    p-6
    flex
    items-center
`

export const MaterialDescription = tw.div`
    py-6
    leading-relaxed
`

export const MaterialArrow = tw.div`
    h-full
    p-6
    flex
    items-center
    
`