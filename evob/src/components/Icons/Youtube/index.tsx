import { IconContainer } from "@/components/Icons/styles";
import { defaultTheme } from "@/styles/theme/default";
import { IconProps } from "../IconProps";

export const YoutubeIcon = ({ color = defaultTheme["gray-800"], width = 16, height = 16 }: IconProps) => {
    return (
        <IconContainer>
            <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.7769 3.96392C15.6929 3.22217 15.0327 2.5109 14.3419 2.41561C10.1294 1.86146 5.86975 1.86146 1.65865 2.41561C0.967274 2.51069 0.307027 3.22217 0.223041 3.96392C-0.0743471 6.68239 -0.0743471 9.31823 0.223041 12.0361C0.307027 12.7778 0.967274 13.4898 1.65865 13.5844C5.86975 14.1385 10.1296 14.1385 14.3419 13.5844C15.0327 13.4899 15.6929 12.7778 15.7769 12.0361C16.0744 9.31848 16.0744 6.68239 15.7769 3.96392ZM6.66656 10.8238V5.17706L10.6666 8.00054L6.66656 10.8238Z"
                    fill={color}
                />
            </svg>

        </IconContainer>
    );
};
