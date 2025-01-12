"use client";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import SharePopup from "../SharePopup";
import { ShareButtonContainer } from "./styles";
import { ShareIcon } from "../Icons/Share";

export default function ShareButton() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentUrl =
        typeof window !== "undefined"
            ? `${window.location.origin}${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""
            }`
            : "";

    const togglePopup = () => setIsPopupVisible(!isPopupVisible);

    return (
        <>
            <ShareButtonContainer onClick={togglePopup}>
                <ShareIcon />
            </ShareButtonContainer>
            {isPopupVisible && (
                <SharePopup togglePopup={togglePopup} url={currentUrl} />
            )}
        </>
    );
}