import PageContainer from "../component/pageContainer/PageContainer";
import { RecipeCard } from "../component/recipeCard/RecipeCard";
import { useQuery } from 'react-query'
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { recipeBySearch } from "../utils/recipeHelper";

export function Recipe() {

    let [searchParams] = useSearchParams();
    const query = searchParams.get("q")

    const { isLoading, data } = useQuery({
        queryKey: ["recipes", query],
        queryFn: recipeBySearch,
        ...{ enabled: !!query }
    })

    if (isLoading) return <Spinner />
    return (
        <PageContainer>
            <SimpleGrid minChildWidth='240px' spacing='20px' margin='8'>
            {data?.hits.map(hit => (<RecipeCard {...hit.recipe} />))}
            </SimpleGrid>
        </PageContainer>
    )
}