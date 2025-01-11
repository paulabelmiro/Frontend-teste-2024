import { IconContainer } from "@/components/Icons/styles";
import { IconProps } from "../IconProps";
import { defaultTheme } from "@/styles/theme/default";

export const MenuIcon = ({ color = defaultTheme.purple, width = 22, height = 20 }: IconProps) => {
    return (
        <IconContainer>
            <svg width={width} height={height} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="18.0952" width="16.2609" height="1.90476" rx="0.952381" fill={color} />
                <rect y="8.57141" width={width} height="1.90476" rx="0.952381" fill={color} />
                <rect width="19.1304" height="1.90476" rx="0.952381" fill={color} />
            </svg>
        </IconContainer>
    )
}
