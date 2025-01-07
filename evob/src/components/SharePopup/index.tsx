"use client"
import Image from "next/image";
import { useState } from "react";
import { Overlay, PopupCloseButton, PopupContainer, PopupCopyButton, PopupFooter, PopupFooterButton, PopupHeader, PopupShareButton, PopupShareContent, PopupCopyMessage, PopupShareUrl, PopupTitle } from "./styles";
import close from "../../assets/close.svg";
import copy from "../../assets/copy.svg";
import whatsapp from "../../assets/whatsapp-white.svg";

interface SharePopupProps {
    togglePopup: (event: React.MouseEvent<HTMLElement>) => void;
    url: string;
}

export default function SharePopup({ togglePopup, url }: SharePopupProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        //Tenta usar o método mais moderno
        if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
            navigator.clipboard.writeText(url).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
        } else {
            //Fallback para navegadores antigos ou móveis
            const textArea = document.createElement("textarea");
            textArea.value = url;
            textArea.style.position = "fixed";
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
                document.execCommand("copy"); //Método antigo
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error("Erro ao copiar o texto:", err);
            } finally {
                document.body.removeChild(textArea);
            }
        }
    };

    const handleShareWhatsApp = () => {
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
            `Confira este curso incrível: ${url}`
        )}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <Overlay>
            <PopupContainer>
                <PopupHeader>
                    <PopupTitle>Compartilhar curso</PopupTitle>
                    <PopupCloseButton onClick={togglePopup}>
                        <Image src={close} alt="Fechar" width={38} height={38} />
                    </PopupCloseButton>
                </PopupHeader>
                <PopupShareContent>
                    <PopupCopyButton onClick={handleCopy}>
                        <PopupShareUrl>{url}</PopupShareUrl>
                        <Image src={copy} alt="Copiar" width={16} height={16} />
                    </PopupCopyButton>
                    {copied && <PopupCopyMessage>Copiado!</PopupCopyMessage>} {/* Mensagem visual de confirmação */}
                    <PopupShareButton
                        $variantcolor="green"
                        $variantsize="sm"
                        onClick={handleShareWhatsApp}
                    >
                        <Image src={whatsapp} alt="Whatsapp" width={16} height={16} />
                        Compartilhar via Whatsapp
                    </PopupShareButton>
                </PopupShareContent>
                <PopupFooter>
                    <PopupFooterButton
                        $variantcolor="white"
                        $variantsize="sm"
                        onClick={togglePopup}
                    >
                        Fechar
                    </PopupFooterButton>
                </PopupFooter>
            </PopupContainer>
        </Overlay>
    )
}