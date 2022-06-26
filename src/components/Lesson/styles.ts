import { Link } from 'react-router-dom'
import tw from 'tailwind-styled-components'

export const Wrapper = tw(Link)`
    group
`

export const Date = tw.span`
    text-gray-300
    capitalize
`

export const Content = tw.div`
    rounded
    border
    border-gray-500
    p-4
    mt-2
    group-hover:border-green-500

    ${({isActiveLesson} : {isActiveLesson: boolean}) => `
        ${isActiveLesson && `
            bg-green-500
        `}
    `}
`

export const ContentHeader = tw.header`
    flex
    items-center
    justify-between
`