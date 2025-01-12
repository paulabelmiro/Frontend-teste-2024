import styled from "styled-components";
import { ButtonContainer } from "../Button/styles";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 990;
    width: 100vw;
    height: 100vh;
    background: rgba(39, 39, 39, 0.4);
    transition: background-color 0.3s ease;;
`;

export const PopupContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: absolute;   
    width: 91.5%;
    height: 234px;
    background: ${props => props.theme["gray-150"]};
    border-radius: 4px;
    z-index: 999;
    left: calc(50% - 91.5%/2);
    top: calc(50% - 234px/2 - 96.5px);

    @media screen and (min-width: 768px) {
        left: calc(50% - 405px/2 + 0.5px);
        top: calc(50% - 234px/2 - 0.5px);
        width: 405px;
    }
`;

export const PopupHeader = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px 8px 16px;
    width: 100%;
    height: 54px;
    border-bottom: 1px solid #F3F4F6;
`;

export const PopupTitle = styled.h3`
    font-family: ${props => props.theme.fonts.inter};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
    color: #262626;
    white-space: nowrap;
`;

export const PopupCloseButton = styled.button`
    width: 38px;
    height: 38px;
    border: none;
    background: none;
`;

export const PopupShareContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 16px;
    width: 100%;
    height: 120px;
`;

export const PopupCopyButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 12px;
    gap: 8px;
    width: 100%;
    height: 36px;
    background: ${props => props.theme["gray-150"]};
    border: 1px solid #D1D5DB;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
`;
export const PopupCopyMessage = styled.span`
    font-family: ${props => props.theme.fonts.inter};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 125%;
    color: #FAFAFA;
    position: absolute;
    z-index: 1000;
    right: 52px;
    background: ${props => props.theme.green};
    padding: 10px 20px;
`;

export const PopupShareUrl = styled.span`
    font-family: ${props => props.theme.fonts.inter};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 125%;
    color: #404040;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const PopupShareButton = styled(ButtonContainer)`
    font-weight: 500;
    font-size: 12px;
    line-height: 125%;
    color: #FAFAFA;
    width: 100%;
    height: 36px;

    &:hover {
        background-color: ${props => props.theme.green};
    }
`;

export const PopupFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 12px 16px;
    gap: 8px;
    width: 100%;
    height: 60px;
    border-top: 1px solid #E5E7EB;
`;

export const PopupFooterButton = styled(ButtonContainer)`
    width: 76px;
    height: 36px;
    border: 1px solid #E5E7EB;
    background: none;
    font-weight: 500;
    font-size: 12px;
    line-height: 125%;
    color: #404040;

    &:hover {
        background: none;
    }
`;