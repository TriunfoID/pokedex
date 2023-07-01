import { ButtonDetails, ContainerCard, TextCard, DivPokemon} from "./styles"

function Card(pokemon, onDetailsClik)

return(
    <ContainerCard>
        <TextCard>
            <p>#{pokemon.id}</p>
            <h2>#{pokemon.name}</h2>
            <p>#{pokemon.types}</p>
            <ButtonDetails onDetailsClik=(() => onDetailsClik)
        </TextCard>
    </ContainerCard>

    <DivPokemon>
        <Imgem src=
    </DivPokemon>
    

    )
}

export default card