import styled from 'styled-components'


export const Slide = styled.div`
    display: flex;
    margin-top: 2rem;
    height: 27rem;
    width: 100%;
    min-width: 35rem;
    padding: 3rem;
    color: ${props => (props.published ? '#d9d9d9' : '#494949')};
    background: ${props => (props.published ? '#494949' : '#d9d9d9')};

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 769px) {
        & {
            height: 17rem;
            width: 100vw;
            margin: 0;
            padding: 1rem;
        }
    }
`

export const SlideContainer = styled.div`
    display: flex;
    flex-direction: ${props => (props.image ? 'row' : 'column')};
    justify-content: ${props => (props.image ? 'flex-end' : 'flex-start')};
    width: 66rem;
`

export const UserContainer = styled.div`
    display: flex; 
    height: 6rem;
    width: 100%;  
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    color: #fbfbfb;
    background: ${props => (props.published ? '#494949' : '#d9d9d9')};
    border-bottom: .1rem solid #fbfbfb; 

    @media (max-width: 769px) {
        margin-bottom: .1rem;
    }
`

// ${props => (props.upload ? '7rem' : 'none')}