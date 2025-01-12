import { HeaderContainer, TopbarContainer } from "./styles";
import Search from "../Search";
import LoginMenu from "../Login";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";


export default function TopbarDesktop() {
    return (
        <HeaderContainer>
            <TopbarContainer>
                <Search />
                <Link href="/">
                    <Image src={logo} alt="evob" width={76} height={30} />
                </Link>
                <LoginMenu />
            </TopbarContainer>
        </HeaderContainer>
    );
}