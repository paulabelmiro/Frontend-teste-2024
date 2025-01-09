import Image from "next/image";
import { SearchContainer, SearchInput } from "./styles";
import search from "@/assets/search.svg";

export default function Search() {
    return (
        <SearchContainer>
            <Image src={search} alt="Buscar" width={16} height={16} />
            <SearchInput placeholder="Busca" />
        </SearchContainer>
    )
}