import styled from "styled-components";

export const ShareButtonContainer = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    gap: 10px;
    position: fixed;
    width: 56px;
    height: 56px;
    left: 75%;
    top: 60vh;
    background: ${props => props.theme.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 99999997952px;
    border: none;

    @media screen and (min-width: 1024px) {
        left: 91%;
        top: 75vh;
    }
`