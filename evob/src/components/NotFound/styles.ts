import styled from "styled-components";

export const NotFoundContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    margin: auto;
    padding: 20px 40px;
    gap: 40px;
    align-items: center;
`;

export const NotFoundMessage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 0;
`;

export const NotFoundTitle = styled.h1`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 116%;
    color: ${props => props.theme["gray-750"]};
    text-align: center;
`;
export const NotFoundText = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 116%;
    text-align: center;
    color: ${props => props.theme["gray-400"]};
`;