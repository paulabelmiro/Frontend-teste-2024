"use client"
import Image from "next/image";
import { NotFoundContainer, NotFoundMessage, NotFoundText, NotFoundTitle } from "./styles";
import error404 from "@/assets/404.png";
import { ButtonContainer } from "../Button/styles";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <NotFoundContainer>
            <Image src={error404} width={328} height={215} alt="404 página não encontrada" sizes="(max-width: 70%)" />
            <NotFoundMessage>
                <NotFoundTitle>A página que você tentou acessar não foi encontrada!</NotFoundTitle>
                <NotFoundText>
                    Verifique se o link que você tentou acessar está correto ou faça uma busca no topo da página.
                </NotFoundText>
            </NotFoundMessage>
            <ButtonContainer $variantcolor="primary" $variantsize="lg" onClick={() => router.push("/")}>
                Acessar a Home
            </ButtonContainer>
        </NotFoundContainer>
    )
}