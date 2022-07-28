import styled from 'styled-components'


export const Button = styled.button`
    font-family: 'nimbus-sans';
    font-style:normal;
    font-weight: 400;
    font-size: 2.1rem;
    max-height: ${props => (props.pip ? '20vh' : '10vh')};
    color: ${props => (props.pip ? '#ababab' : '#DAA520')};
    padding: 2.5vh 3rem;
    background: ${props => (props.pip ? 'none' : '#393939')}; /*#494949*/
    border: ${props => (props.pip ? '.1rem solid #dedede' : 'none')};
    border-radius: .5rem;
    transition: 500ms;

    &:hover {
        cursor: pointer;
        color: ${props => (props.pip ? '#ababab' : '#393939')};
        background: ${props => (props.pip ? 'none' : '#DAA520')};
    }
    &:focus {
        outline: none;
    }
`

export const ButtonSet = styled.button`
    font-family: 'nimbus-sans';
    font-style:normal;
    font-weight: 400;
    font-size: 2.1rem;
    max-height: 10vh;
    padding: 2vh 3rem;
    color: ${props => (props.active ? '#393939' : '#DAA520')};
    background: ${props => (props.active ? '#DAA520' : '#393939')};
    border: none;
    border-radius: ${props => (props.draft ? '.5rem 0 0 .5rem' : '0 .5rem .5rem 0')};
    transition: 500ms;

    &:focus {
        outline: none;
    }

    @media (max-width: 769px) {
        /* width: 100%; */
    }
`
