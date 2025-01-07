import styled from 'styled-components';

export const CoursesSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    gap: 24px;

    @media screen and (min-width: 1024px) {
        padding: 48px 60px 48px 60px;
        gap: 40px;
        flex-direction: column;
        align-items: flex-start;
    }

`

export const CoursesTopbar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 20px;
    text-align: left;
    width: 100%;
`

export const CoursesTitle = styled.h2`
    width: 100%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 116%;
    color: ${props => props.theme['gray-750']};

    @media screen and (min-width: 1024px) {
        font-size: 32px;
    }
`

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 0px;
    width: 100%;

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        align-content: flex-start;
    }
`