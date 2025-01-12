import Image from "next/image";
import logo from "@/assets/logo.svg";
import { MenuContainer, TopBarMobileContainer } from "./styles";
import Link from "next/link";
import { SearchIcon } from "../Icons/Search";
import { EnterIcon } from "../Icons/Enter";
import { defaultTheme } from "@/styles/theme/default";
import { MenuIcon } from "../Icons/Menu";

export default function TopbarMobile() {
    return (
        <TopBarMobileContainer>
            <MenuContainer>
                <MenuIcon />
                <SearchIcon height={20} />
            </MenuContainer>
            <Link href="/">
                <Image src={logo} alt="evob" width={50} height={20} />
            </Link>
            <EnterIcon color={defaultTheme.purple} width={20} height={20} />
        </TopBarMobileContainer>
    );
}