import styled from 'styled-components';

export const SearchContainer = styled.div`
    height: 19px;
    display: flex;
    gap: 8px;
    align-items: center;
`

export const SearchInput = styled.input`
    height: 19px;
    color: ${props => props.theme.black};
    font-family: "inter";
    font-weight: 500;
    font-size: 16px;
    line-height: 18.56px;
    border: none;
    background-color: transparent;
    outline: none;
    
    &::placeholder {
        color: ${props => props.theme.black};
        font-weight: 500;
        font-size: 16px;
        line-height: 18.56px;
    }
`