"use client"
import { Banner } from "@/@types/banner";
import { BannerArea, BannerAreaColor, BannerButton, BannerContainer, BannerTitle } from "./styles";
import { useRouter } from "next/navigation";

interface BannerProps {
  banner: Banner
  target: string
}

export default function HomeBanner({ banner, target }: BannerProps) {

  const router = useRouter();

  return (
    <BannerContainer>
      <BannerArea $srcdesktop={banner.desktop} $srcmobile={banner.mobile}>
        <BannerAreaColor />
        <BannerButton $variantcolor="secondary" $variantsize="md" onClick={() => router.push(target)}>Conheça as aulas</BannerButton>
      </BannerArea>
      <BannerTitle>{banner.description}</BannerTitle>
    </BannerContainer>
  )
}