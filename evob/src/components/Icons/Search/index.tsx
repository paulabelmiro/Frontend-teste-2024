import { IconContainer } from "@/components/Icons/styles";
import { defaultTheme } from "@/styles/theme/default";
import { IconProps } from "../IconProps";

export const SearchIcon = ({ color = defaultTheme.purple, width = 16, height = 16 }: IconProps) => {
    return (
        <IconContainer>
            <svg width={width} height={height} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7567 15.0735L11.8125 11.1129C12.8266 9.94901 13.3823 8.48455 13.3823 6.95999C13.3823 3.39801 10.3806 0.5 6.69113 0.5C3.0017 0.5 0 3.39801 0 6.95999C0 10.522 3.0017 13.42 6.69113 13.42C8.07619 13.42 9.39609 13.0167 10.5246 12.251L14.4988 16.2416C14.6649 16.4082 14.8883 16.5 15.1278 16.5C15.3544 16.5 15.5694 16.4166 15.7326 16.2649C16.0794 15.9428 16.0904 15.4085 15.7567 15.0735ZM6.69113 2.18522C9.4182 2.18522 11.6367 4.32713 11.6367 6.95999C11.6367 9.59286 9.4182 11.7348 6.69113 11.7348C3.96406 11.7348 1.74551 9.59286 1.74551 6.95999C1.74551 4.32713 3.96406 2.18522 6.69113 2.18522Z"
                    fill={color}
                />
            </svg>
        </IconContainer>
    )
}
