import styled, { css } from 'styled-components';
import isPropValid from "@emotion/is-prop-valid";

export type ButtonVariantColor = "primary" | "secondary" | "white" | "green";
export type ButtonVariantSize = "md" | "lg" | "sm";

interface ButtonContainerProps {
    $variantcolor: ButtonVariantColor;
    $variantsize: ButtonVariantSize;
}

export const ButtonContainer = styled.button.withConfig({
    shouldForwardProp: (prop) =>
        isPropValid(prop) && !["$variantcolor", "$variantsize"].includes(prop),
}) <ButtonContainerProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    color: ${(props) => props.theme.white};
    border: none;
    font-family: ${props => props.theme.fonts.inter};
    font-weight: 700;
    font-size: 16px;
    line-height: 18.56px;
  
    ${(props) => css`
      background-color: ${props.$variantcolor === "primary"
            ? props.theme.purple
            : props.$variantcolor === "secondary"
                ? props.theme.black
                : props.$variantcolor === "green"
                    ? props.theme.green
                    : props.theme.white};
      height: ${props.$variantsize === "md"
            ? "52px"
            : props.$variantsize === "lg"
                ? "48px"
                : "31px"};
      padding: ${props.$variantsize === "md"
            ? "16px 40px"
            : props.$variantsize === "lg"
                ? "12px 60px"
                : "8px 12px"};
      gap: ${props.$variantsize === "md"
            ? "8px"
            : props.$variantsize === "lg"
                ? "10px"
                : "6px"};
    `}
  
    &:hover {
      background-color: ${(props) => props.theme.yellow};
      transition: background-color 300ms ease-out;
    }
`;