import styled from 'styled-components'


export const MainLogo = styled.img.attrs({
    alt: 'Pip Producers',
})`
    display: block;
    max-width: 73vw;
    /* margin: 5rem auto 2rem auto; */
    margin: 0 auto;
`

export const SmallLogo = styled.img.attrs({
    alt: 'Pip-P'
})`
    max-height: 9vh;
    margin-right: 3rem;

    &:hover {
        cursor: pointer;
    }
`

export const SmallIcon = styled.img`
    height: 6rem;
    width: 6rem;
    margin: 2rem 3rem;
    opacity: .3;
    transition: 500ms;

    &:hover {
        cursor: pointer;
        opacity: 1;
    }

    @media (max-width: 769px) {
        margin: 2rem 0; 
    }
`
