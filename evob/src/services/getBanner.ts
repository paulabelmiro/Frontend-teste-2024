type Banner = {
    id: number;
    title: string;
    target: string;
    description: string;
    rules: object;
    desktop: string;
    mobile: string;
}

export async function getBanner(): Promise<Banner[]> {
    const url = "https://api.evob.dev/content/banners";

    const requestOptions: RequestInit = {
        method: "GET",
        headers: {
            Origin: "http://localhost:3024",
        },
        redirect: "follow",
    };

    const res = await fetch(url, requestOptions);

    if (!res.ok) {
        throw new Error("Não foi possível carregar o banner!");
    }

    const data = await res.json();
    return data.banners;
}