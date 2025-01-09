import Image from "next/image";
import { SocialMediaContainer } from "./styles";
import whatsapp from "@/assets/whatsapp.svg";
import youtube from "@/assets/youtube.svg";
import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/instagram.svg";

export default function SocialMedia() {
    return (
        <SocialMediaContainer>
            <Image src={whatsapp} alt="WhatsApp" width={16} height={16} />
            <Image src={youtube} alt="Youtube" width={16} height={16} />
            <Image src={facebook} alt="Facebook" width={16} height={16} />
            <Image src={instagram} alt="Instagram" width={16} height={16} />
        </SocialMediaContainer>
    )
}