import Image from "next/image";
import { LoginButton, LoginContainer, RegisterButton } from "./styles";
import user from "@/assets/user.svg";
import enter from "@/assets/enter.svg";

export function LoginMenu() {
    return (
        <LoginContainer>
            <RegisterButton>
                <Image src={user} alt="Cadastre-se" width={16} height={16}/>
                Cadastre-se
            </RegisterButton>
            <LoginButton>
                <Image src={enter} alt="Entrar" width={16} height={16}/>
                Entrar
            </LoginButton>
        </LoginContainer>
    )
}