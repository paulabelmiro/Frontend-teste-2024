import styled from "styled-components";

export const MaintenanceContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 20px 40px;

    @media screen and (min-width: 1024px) {
        min-height: 420px;
    }
`;

export const MaintenanceMessage = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    max-width: 80%;
    gap: 20px;
`;
export const MaintenanceTitle = styled.h1`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 116%;
    color: ${props => props.theme["gray-750"]};
    text-align: center;

    @media screen and (min-width: 1024px) {
        font-size: 42px;
    }
`;
export const MaintenanceText = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 116%;
    text-align: center;
    color: ${props => props.theme["gray-400"]};
`;