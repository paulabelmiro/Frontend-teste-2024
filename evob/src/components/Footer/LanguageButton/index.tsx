import { LanguageButtonContainer, LanguageButtonVariant } from "./styles";

interface LanguageButtonProps {
    language: string
    status?: LanguageButtonVariant
}

export default function LanguageButton({ language, status = 'inactive' }: LanguageButtonProps) {
    return <LanguageButtonContainer $status={status}>{language}</LanguageButtonContainer>
}