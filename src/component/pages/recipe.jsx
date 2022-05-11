import PageContainer from "../pageContainer/PageContainer";
import { useQuery } from 'react-query'
import { Box, Spinner } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

export function Recipe() {
    let [searchParams] = useSearchParams();
    const query = searchParams.get("q")

    const apiParams = new URLSearchParams({
        app_key: "cda9a2ddad77ff868cec50dc7286234c",
        app_id: "85effab9",
        type: "public",
        q: query
    })
    const url = "https://api.edamam.com/api/recipes/v2?" + apiParams.toString()
    const { isLoading, data } = useQuery(["recipes",query], async () => ((await fetch(url)).json()), { enabled: !!query })

    if (isLoading) return <Spinner />
    return (
        <PageContainer>
            {data?.hits.map(hit => (<Box>{hit.recipe.label}</Box>))}
        </PageContainer>
    )
}