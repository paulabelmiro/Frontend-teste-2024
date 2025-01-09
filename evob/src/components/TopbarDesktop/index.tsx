import { HeaderContainer, TopbarContainer } from "./styles";
import { Search } from "../Search";
import { LoginMenu } from "../Login";
import Image from "next/image";
import logo from "@/assets/logo.svg";


export function TopbarDesktop() {
    return (
        <HeaderContainer>
            <TopbarContainer>
                <Search />
                <Image src={logo} alt="evob" width={76} height={30} />
                <LoginMenu />
            </TopbarContainer>
        </HeaderContainer>
    )
}