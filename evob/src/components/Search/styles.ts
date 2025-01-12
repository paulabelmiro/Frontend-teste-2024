import styled from "styled-components";

export const SearchContainer = styled.div`
    height: 19px;
    display: flex;
    gap: 8px;
    align-items: center;

    &:hover {
        svg path {
            fill: ${props => props.theme.yellow};
        }
        cursor: pointer;
    }
`;

export const SearchInput = styled.input`
    height: 19px;
    color: ${props => props.theme.black};
    font-family: ${props => props.theme.fonts.inter};
    font-weight: 500;
    font-size: 16px;
    line-height: 18.56px;
    border: none;
    background-color: transparent;
    outline: none;
    
    &::placeholder {
        color: ${props => props.theme.black};
        font-family: ${props => props.theme.fonts.inter};
        font-weight: 500;
        font-size: 16px;
        line-height: 18.56px;
    }
`;