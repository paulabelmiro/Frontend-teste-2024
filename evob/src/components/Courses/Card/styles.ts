import styled, { css } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { ButtonContainer } from "@/components/Button/styles";

interface CardProps {
    $thumbnail?: string
}

export const CourseCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 100%;
    height: 353px;

    @media screen and (min-width: 768px) {
        width: calc((100% - 20px)/2);
        min-width: 245px;
    }

    @media screen and (min-width: 1024px) {
        width: calc((100vw - 197px)/4);
        min-width: 245px;
    }
`;

export const CardImage = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        isPropValid(prop) && !["$thumbnail"].includes(prop),
}) <CardProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 16px;
    gap: 16px;
    isolation: isolate;
    width: 100%;
    height: 157px;
    align-self: stretch;
    flex-grow: 0;
    ${props => css`
        background: url(${props.$thumbnail});`
    }
    background-size: cover;
    background-position: center;
`;

export const CardFavoriteContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 16px;
    isolation: isolate;
    width: 100%;
    height: 157px;
`;

export const CardFavoriteButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 6px;
    width: 36px;
    height: 36px;
    background: rgba(0, 0, 0, 0.35);
    border-radius: 999999px;
    border: none;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    gap: 16px;
    width: 100%;
    height: 196px;
    background: ${props => props.theme.white};
`;

export const CardTitleContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    height: 60px;
    width: 100%;
    margin: 0 auto;
`;

export const CardTitle = styled.h3`
    font-family: ${props => props.theme.fonts.inter};
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 27.84px;
    width: 100%;
    color: ${props => props.theme["gray-950"]};
`;

export const CardDescription = styled.p`
    font-family: ${props => props.theme.fonts.inter};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19.6px;
    display: flex;
    align-items: flex-end;
    width: 100%;
    color: ${props => props.theme["gray-950"]};
`;

export const CardButton = styled(ButtonContainer)`
    width: 100%;
    margin: 0 auto;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
    line-height: 19px;
    font-family: ${props => props.theme.fonts.robotoCondensed};
`;

export const CardTagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    height: 22px;
`;

export const CardTagsMark = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px;
    gap: 8px;
    width: 22px;
    height: 22px;
    background: ${props => props.theme.red};
`;

export const CardTag = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 12px;
    gap: 12px;
    height: 22px;
    background: ${props => props.theme["gray-900"]};
`;

export const CardTagText = styled.span`
    font-family: ${props => props.theme.fonts.quattrocento};
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 13.92px;
    text-transform: uppercase;
    color: ${props => props.theme.white};
    mix-blend-mode: normal;
`;