import { EmptyContainer, EmptyIcon, EmptyText } from "./styles";
import empty from "@/assets/empty.svg"
import Image from "next/image";

export default function Empty() {
    return (
        <EmptyContainer>
            <EmptyIcon>
                <Image src={empty} alt="Nenhum curso favorito" width={24} height={24} />
            </EmptyIcon>
            <EmptyText>Parece que você ainda não tem cursos favoritados</EmptyText>
        </EmptyContainer>
    )
}