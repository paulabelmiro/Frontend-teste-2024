import { Banner } from "@/@types/banner";
import { requestOptions } from "./requestOptions";

// Retorna da API a lista de banners do site
export async function getBanner(): Promise<Banner[]> {
    const URL = process.env.NEXT_PUBLIC_API_URL + "banners/";

    const res = await fetch(URL, requestOptions);

    if (!res.ok) {
        throw new Error("Não foi possível carregar o banner!");
    }

    const data = await res.json();
    return data.banners;
}