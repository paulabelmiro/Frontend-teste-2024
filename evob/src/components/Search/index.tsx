import { SearchContainer, SearchInput } from "./styles";
import { SearchIcon } from "../Icons/Search";
export default function Search() {
    return (
        <SearchContainer>
            <SearchIcon />
            <SearchInput placeholder="Busca" />
        </SearchContainer>
    )
}