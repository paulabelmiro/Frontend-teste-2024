"use client";
import React, { useState, useEffect } from "react";
import { TopbarDesktop } from "../TopbarDesktop";
import TopbarMobile from "../TopbarMobile";

export function Header() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isSmallScreen ?
        <TopbarMobile />
        : <TopbarDesktop />
}