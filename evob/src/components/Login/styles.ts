import styled from 'styled-components';

export const LoginContainer = styled.div`
    height: 35px;
    display: flex;
    gap: 20px;
    align-items: center;
`

export const RegisterButton = styled.button`
    height: 19px;
    display: flex;
    gap: 8px;
    color: ${props => props.theme.black};
    font-family: ${props => props.theme.fonts.inter};
    font-weight: 500;
    font-size: 16px;
    line-height: 18.56px;
    border: none;
    background: none;
`

export const LoginButton = styled.button`
    height: 35px;
    padding: 8px 20px 8px 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: ${props => props.theme.fonts.inter};
    font-size: 16px;
    font-weight: 500;
    line-height: 18.56px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: ${props => props.theme.white};
    border: none;
    background: ${props => props.theme.purple};

    &:hover {
        background-color: ${props => props.theme.yellow};
        transition: background-color 300ms ease-out;
    }
`