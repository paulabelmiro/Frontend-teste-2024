"use client"
import { BannerArea, BannerAreaColor, BannerButton, BannerContainer, BannerTitle } from "./styles";

interface BannerProps {
  title: string
  desktop: string
  mobile: string
}

export default function Banner({ title, desktop, mobile }: BannerProps) {

  return (
    <BannerContainer>
      <BannerArea $srcdesktop={desktop} $srcmobile={mobile}>
        <BannerAreaColor />
        <BannerButton $variantcolor="secondary" $variantsize="md">Conheça as aulas</BannerButton>
      </BannerArea>
      <BannerTitle>{title}</BannerTitle>
    </BannerContainer>
  )
}