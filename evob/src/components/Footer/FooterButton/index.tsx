import { FooterButtonContainer, FooterButtonText, FooterButtonUnderline } from "./styles";

interface FooterButtonProps {
    text: string
}

export default function FooterButton({ text }: FooterButtonProps) {
    return (
        <FooterButtonContainer>
            <FooterButtonText>{text}</FooterButtonText>
            <FooterButtonUnderline />
        </FooterButtonContainer>
    );
}