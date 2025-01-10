"use client"
import Image from "next/image";
import { MaintenanceContainer, MaintenanceMessage, MaintenanceText, MaintenanceTitle } from "./styles";
import maintenance from "@/assets/maintenance.png";

export default function Maintenance() {
    return (
        <MaintenanceContainer>
            <Image src={maintenance} alt="Página em manutenção" width={292} height={270} sizes="(max-width: 60%)" />
            <MaintenanceMessage>
                <MaintenanceTitle>Oops!</MaintenanceTitle>
                <MaintenanceText>Parece que nosssos dados não estão disponíveis neste momento, você pode tentar acessar novamente mais tarde.</MaintenanceText>
            </MaintenanceMessage>
        </MaintenanceContainer>
    )
}