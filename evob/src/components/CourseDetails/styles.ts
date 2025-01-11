import styled, { css } from 'styled-components';
import isPropValid from "@emotion/is-prop-valid";
import { ButtonContainer } from '../Button/styles';

interface CourseBannerProps {
    $srcdesktop: string
    $srcmobile?: string
}

export const CoursePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 100%;
    flex-grow: 1;
`

export const CourseBanner = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        isPropValid(prop) && !["srcdesktop", "$srcmobile"].includes(prop),
}) <CourseBannerProps>`
    width: 100%;
    height: 140px;
    ${props => css`
            background: url(${props.$srcmobile});`
    }
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;   

    @media screen and (min-width: 1024px) {
        height: 540px;
        flex-grow: 0;
        ${props => css`
            background: url(${props.$srcdesktop});`
    }
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;   
    }
`

export const CourseDetailsSection = styled.section`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding: 24px;
    gap: 16px;
    width: 100%;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        padding: 48px 60px;
        gap: 64px;
        width: 100%;
    }
`

export const CourseDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;
`

export const CourseDetailsTitle = styled.h1`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 116%;
    color: ${props => props.theme['gray-750']};

    @media screen and (min-width: 1024px) {
        font-size: 32px;
    }
`

export const CourseDetailsText = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 116%;
    color: ${props => props.theme['gray-750']};

    @media screen and (min-width: 1024px) {
        font-size: 20px;
    }
`

export const CourseMenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 5px;
    width: 100%;
    height: 31px;

    @media screen and (min-width: 1024px) {
        width: 114px;
    }
`

export const CourseMenuButtonBorder = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 100%;
    height: 31px;
    border: 1px solid #D4D9EB;
    border-radius: 2px;
    box-sizing: unset;
`

export const CourseMenuButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 100%;
    height: 31px;
    box-sizing: unset;
`

export const CourseMenuButton = styled(ButtonContainer)`
    width: 100%;
    border-radius: 2px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 125%;
    display: flex;
    align-items: center;
    color: #272727;

    &:hover {
        background-color: ${props => props.theme.white};
    }
`