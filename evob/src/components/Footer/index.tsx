"use client";
import SocialMedia from "../SocialMedia";
import FooterButton from "./FooterButton";
import LanguageButton from "./LanguageButton";
import { FooterButtons, FooterContainer, LanguageContainer } from "./styles";

export default function Footer() {
    return (
        <FooterContainer>
            <SocialMedia />
            <FooterButtons>
                <FooterButton text="Termos de uso" />
                <FooterButton text="Política de privacidade" />
                <LanguageContainer>
                    <LanguageButton language="PT" status="active" />
                    <LanguageButton language="EN" />
                    <LanguageButton language="ES" />
                </LanguageContainer>
            </FooterButtons>
        </FooterContainer>
    );
}