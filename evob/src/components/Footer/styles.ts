import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 20px;
    gap: 40px;
    width: 100%;

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 60px;
        gap: unset;
    }

`;

export const FooterButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;
    width: 90%;
    height: 88px;

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
        gap: 60px;
        margin: 0;
        width: 418px;
        height: 22px;
    }
`;

export const LanguageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 20px;
    width: 91px;
    height: 20px;
`;