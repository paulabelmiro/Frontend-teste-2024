import { IconContainer } from "@/components/Icons/styles";
import { IconProps } from "../IconProps";

export const CloseIcon = ({ color = "#262626", width = 38, height = 38 }: IconProps) => {
    return (
        <IconContainer>
            <svg width={width} height={height} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5192 23.4809L23.4808 14.5192" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23.4808 23.4809L14.5192 14.5192" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </IconContainer>
    )
}
