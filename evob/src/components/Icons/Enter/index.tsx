import { IconContainer } from "@/components/Icons/styles";
import { defaultTheme } from "@/styles/theme/default";
import { IconProps } from "../IconProps";

export const EnterIcon = ({ color = defaultTheme.white, width = 16, height = 16 }: IconProps) => {
    return (
        <IconContainer>
            <svg width={width} height={height} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8 16.5V14.7222H14.2222V2.27778H8V0.5H14.2222C14.7111 0.5 15.1298 0.673926 15.4782 1.02178C15.8261 1.37022 16 1.78889 16 2.27778V14.7222C16 15.2111 15.8261 15.6298 15.4782 15.9782C15.1298 16.3261 14.7111 16.5 14.2222 16.5H8ZM6.22222 12.9444L5 11.6556L7.26667 9.38889H0V7.61111H7.26667L5 5.34444L6.22222 4.05556L10.6667 8.5L6.22222 12.9444Z"
                    fill={color}
                />
            </svg>
        </IconContainer>
    );
};
