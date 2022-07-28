import styled from 'styled-components'


export const MainContainer = styled.div`
    width: 60vw; 
    min-height: 5rem; 
    margin: 5rem auto; 
    padding-bottom: 50vh;

    @media (max-width: 1300px) {
        width: 80vw;
    }

    @media (max-width: 769px) {
        width: 100vw;
        margin: 0;
        padding-bottom: 15vh;
    }
`

export const FormContainer = styled.div`
    width: 60vw; 
    min-height: 5rem; 
    margin: 5rem auto; 
    padding-bottom: 50vh;

    @media (max-width: 1024px) {
        width: 80vw;
    }

    @media (max-width: 769px) {
        width: 95vw;
        padding-bottom: 15vh;
    }
`

export const NarrowContainer = styled.div`
    width: 33rem; 
    min-height: 5rem; 
    margin: 5rem auto; 
    padding-bottom: 50vh;
`

export const FadeContainer = styled.div`
    display: flex;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    background: rgba(255,255,255, .8);
`
//${props => (props.delete ? 'rgba(35,35,35, .6)' : 'rgba(255,255,255, .6)')};
