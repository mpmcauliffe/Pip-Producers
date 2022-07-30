import styled from 'styled-components'


export const CoverImage = styled.img`
    max-height: 70rem;
    width: 100%;
    margin: .5rem 0 2rem 0;
`

export const Thumbnail = styled.img`
    max-height: 21rem; 
    max-width: 50rem;

    @media (max-width: 769px) {
        & {
            max-height: 8rem; 
            max-width: 11rem;
        }
    }
`
