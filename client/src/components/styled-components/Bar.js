import styled from 'styled-components'


export const Bar = styled.div`
    display: flex;
    position: ${props => (props.footer ? 'absolute' : 'static')};
    /* bottom: ${props => (props.footer ? 0 : '')}; */
    height: ${props => (props.footer ? '90vh' : '11vh')};
    /* min-height: 6.9rem; */
    width: 100vw; 
    justify-content: ${props => (props.footer ? 'space-between' : 'space-between')};
    padding: 1rem 3rem 1rem 1rem;
    color: ${props => props.color || '#fafafa'};
    background-color: ${props => props.color || '#393939'};
    border: ${props => props.border || 'none'};
`
