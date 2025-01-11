import { EmptyContainer, EmptyIconContainer, EmptyText } from "./styles";
import { EmptyIcon } from "@/components/Icons/Empty";

export default function Empty() {
    return (
        <EmptyContainer>
            <EmptyIconContainer>
                <EmptyIcon />
            </EmptyIconContainer>
            <EmptyText>Parece que você ainda não tem cursos favoritados</EmptyText>
        </EmptyContainer>
    )
}