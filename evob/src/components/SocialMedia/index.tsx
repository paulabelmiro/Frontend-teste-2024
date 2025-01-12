import { SocialMediaContainer } from "./styles";
import { WhatsAppIcon } from "../Icons/WhatsApp";
import { YoutubeIcon } from "../Icons/Youtube";
import { FacebookIcon } from "../Icons/Facebook";
import { InstagramIcon } from "../Icons/Instagram";

export default function SocialMedia() {
    return (
        <SocialMediaContainer>
            <WhatsAppIcon />
            <YoutubeIcon />
            <FacebookIcon />
            <InstagramIcon />
        </SocialMediaContainer>
    );
}