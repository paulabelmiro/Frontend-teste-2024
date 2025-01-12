import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        scrollbar-width: thin;
        scrollbar-color: ${props => props.theme.purple} transparent;
        scrollbar-arrow-color: ${props => props.theme.purple};
    }

    body {
        background: ${props => props.theme["gray-100"]};
    }

    button {
        cursor: pointer;
    }

    *::-webkit-scrollbar {
        width: 3px;
        height: 3px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
        padding: 2px;
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.purple};
    }
`;