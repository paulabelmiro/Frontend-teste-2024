import styled from 'styled-components';

export const FooterButtonContainer = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4px 0px 0px;
    gap: 4px;
    height: 22px;

    &:hover div {
        width: 100%;
        height: 0px;
        border: 2px solid ${props => props.theme.yellow};
        transition: width 300ms ease-out;
    }
`

export const FooterButtonText = styled.span`
    //font-family: 'Quattrocento';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 120%;
    display: flex;
    align-items: center;
    color: ${props => props.theme['gray-800']};
    white-space: nowrap;
`

export const FooterButtonUnderline = styled.div`
    width: 1px;
    height: 0px;
    border: 1px solid transparent;
`