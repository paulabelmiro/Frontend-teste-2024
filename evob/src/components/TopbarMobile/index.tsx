import Image from "next/image";
import logo from "@/assets/logo.svg";
import search from "@/assets/search.svg";
import menu from "@/assets/menu.svg";
import enter from "@/assets/enter-purple.svg";
import { MenuContainer, TopBarMobileContainer } from "./styles";

export default function TopbarMobile() {
    return (
        <TopBarMobileContainer>
            <MenuContainer>
                <Image src={menu} alt="Menu" width={22} height={20} />
                <Image src={search} alt="Buscar" width={16} height={20} />
            </MenuContainer>
            <Image src={logo} alt="evob" width={50} height={20} />
            <Image src={enter} alt="Login" width={20} height={20} />
        </TopBarMobileContainer>
    )
}