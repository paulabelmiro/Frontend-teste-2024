import { LoginButton, LoginContainer, RegisterButton } from "./styles";
import { EnterIcon } from "../Icons/Enter";
import { UserIcon } from "../Icons/User";

export default function LoginMenu() {
    return (
        <LoginContainer>
            <RegisterButton>
                <UserIcon />
                Cadastre-se
            </RegisterButton>
            <LoginButton>
                <EnterIcon />
                Entrar
            </LoginButton>
        </LoginContainer>
    );
}