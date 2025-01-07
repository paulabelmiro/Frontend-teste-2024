import styled, { css } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export type LanguageButtonVariant = 'active' | 'inactive';

interface LanguageButtonContainerProps {
    $status: LanguageButtonVariant
}

export const LanguageButtonContainer = styled.a.withConfig({
    shouldForwardProp: (prop) =>
        isPropValid(prop) && !["$status"].includes(prop),
}) <LanguageButtonContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 3px 0px;
    gap: 10px;
    height: 20px;
    ${props => css`
            border-bottom: 2px solid ${props.$status === 'active' ? props.theme.purple : "transparent"};
        `
    }
    //font-family: 'Quattrocento';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 120%;
    text-align: center;
    color: ${props => props.theme['gray-800']};
`