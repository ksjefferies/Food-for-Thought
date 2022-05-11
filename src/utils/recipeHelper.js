const url = 'https://api.edamam.com/api/recipes/v2';

const apiParams = {
    app_key: "cda9a2ddad77ff868cec50dc7286234c",
    app_id: "85effab9",
    type: "public"
}

export async function recipeBySearch({ queryKey }) {
    let params = new URLSearchParams({ ...apiParams, ...{ q: queryKey[1] } })
    let res = await fetch(`${url}?${params.toString()}`)
    return res.json()
}
export async function recipeByID({ queryKey }) {
    let params = new URLSearchParams(apiParams)
    let res = await fetch(`${url}/${queryKey[1]}?${params.toString()}`)
    return res.json()

}