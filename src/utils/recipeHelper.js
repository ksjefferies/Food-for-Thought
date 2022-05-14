const url = 'https://api.edamam.com/api/recipes/v2';
const recipeUrl = 'https://recipied.io/api';

const apiParams = {
    app_key: "cda9a2ddad77ff868cec50dc7286234c",
    app_id: "85effab9",
    type: "public"
}

export async function recipeBySearch({ queryKey }) {
    //Remove nullish keys from the object
    let searchParams = queryKey[1].filter(e => e[1] ?? false)
    searchParams = Object.fromEntries(searchParams)

    let params = new URLSearchParams({ ...apiParams, ...searchParams })
    let res = await fetch(`${url}?${params.toString()}`)
    return res.json()
}
export async function recipeByID({ queryKey }) {
    let params = new URLSearchParams(apiParams)
    let res = await fetch(`${url}/${queryKey[1]}?${params.toString()}`)
    return res.json();
}

export async function recipeByURL({ queryKey }) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "url": queryKey[1]
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return (await fetch("https://recipied.io/api", requestOptions)).json();
}