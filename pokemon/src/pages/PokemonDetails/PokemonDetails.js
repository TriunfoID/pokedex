import { DivDetails, ImgDetails, TextAbilities, TextDetails } from "./styles";


function PokemonDatails({PokemonDatails, goBack}){
return(
    <div>
        <Header goBack={goBack}/>

        <DivDetails>
            <TextDetails>
                <div>
                    <ImgDetails> src={pokemon.
                    sprintes?.front_deFault} alt =  
                    {pokemon.name}
                    <ImgDetails/>
                    <ImgDetails> src={pokemon.
                    sprintes?.back_deFault} alt =  
                    {pokemon.name}
                    <ImgDetails/>
                </div>
                <h1>{pokemon.name.toUpperCase()}
                </h1>
                <TextAbilities>Habilidades:
                    {pokemon.abilities}</TextAbilities>
                    TextAbilities
                </TextAbilities>
            </TextDetails>
        </DivDetails>
    </div>
    )

}

export default PokemonDatails

