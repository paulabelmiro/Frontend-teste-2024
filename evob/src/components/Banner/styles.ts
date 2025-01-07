import styled, { css } from 'styled-components';
import isPropValid from "@emotion/is-prop-valid";
import { ButtonContainer } from '../Button/styles';

interface BannerAreaProps {
    $srcdesktop: string
    $srcmobile: string
}

export const BannerContainer = styled.div`
    width: 100%;
    height: 460px;

    @media screen and (min-width: 1024px) {
        height: 540px;
    }
`
export const BannerTitle = styled.h1`
    width: 335px;
    max-width: 85%;
    height: 114px;
    color: ${props => props.theme.white};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;
    position: absolute;
    left: 20px;
    top: 248px;

    @media screen and (min-width: 1024px) {
        font-size: 52px;
        line-height: 116%;
        width: 419px;
        height: 168px;
        left: 47px;
        top: 237px;
    }
    
    

    mix-blend-mode: normal;
`
export const BannerArea = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        isPropValid(prop) && !["$srcdesktop", "$srcmobile"].includes(prop),
}) <BannerAreaProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    gap: 60px;
    position: absolute;
    width: 100%;
    height: 460px;
    left: 0px;
    //top: 68px;
    ${(props) => css`
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.35), 
                rgba(0, 0, 0, 0.35)), 
                url(${props.$srcmobile}), 
                url(${props.$srcmobile});`
    }
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    
    @media screen and (min-width: 1024px) {
        flex-direction: row;
        padding: 10px 60px;
        gap: 10px;
        isolation: isolate;
        height: 540px;
        ${(props) => css`
            background: url(${props.$srcdesktop}), 
                url(${props.$srcdesktop}), 
                linear-gradient(90deg, #171717 0%, rgba(23, 23, 23, 0) 24.94%, rgba(23, 23, 23, 0) 76.23%, #171717 100%), 
                url(${props.$srcdesktop});`
    }
        background-size: cover;
        background-repeat: no-repeat;
    }
`

export const BannerAreaColor = styled.div`

    @media screen and (min-width: 1024px) {
        position: absolute;
        width: 658px;
        height: 540px;
        left: 0px;
        top: 0px;
        background: ${props => props.theme.purple};
        clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
    }
    
`

export const BannerButton = styled(ButtonContainer)`  
    position: absolute;
    left: 20px;
    top: 275px;

    @media screen and (min-width: 1024px) {
        order: 1;
        z-index: 1;
        left: 44px;
        top: 427px;
    }
`