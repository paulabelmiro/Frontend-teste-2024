import { IconContainer } from "@/components/Icons/styles";
import { IconProps } from "../IconProps";

export const FilledHeartIcon = ({ color = "#D9D9D9", width = 20, height = 20 }: IconProps) => {
    return (
        <IconContainer>
            <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.5167 17.3416C10.2334 17.4416 9.76675 17.4416 9.48342 17.3416C7.06675 16.5166 1.66675 13.075 1.66675 7.24165C1.66675 4.66665 3.74175 2.58331 6.30008 2.58331C7.81675 2.58331 9.15841 3.31665 10.0001 4.44998C10.8417 3.31665 12.1917 2.58331 13.7001 2.58331C16.2584 2.58331 18.3334 4.66665 18.3334 7.24165C18.3334 13.075 12.9334 16.5166 10.5167 17.3416Z"
                    fill={color}
                />
            </svg>
        </IconContainer>
    )
}
