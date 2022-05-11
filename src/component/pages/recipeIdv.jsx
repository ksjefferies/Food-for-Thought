
import PageContainer from "../pageContainer/PageContainer";
import { useParams } from "react-router";
import { useQuery } from "react-query";

export function RecipeIdv() {
    const { id } = useParams();

    // const apiParams = new URLSearchParams({
    //     app_key: "cda9a2ddad77ff868cec50dc7286234c",
    //     app_id: "85effab9",
    //     type: "public"
    // })
    // const url = `https://api.edamam.com/api/recipes/v2
    /${id}?${apiParams.toString()}`

    return (
        <PageContainer>
            {id}

        </PageContainer>
    )
}