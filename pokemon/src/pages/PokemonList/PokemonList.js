
import {useSatet} from "react"
import { ContainerHome, DivButtonPage } from "./styles"



function PokemonList (){
    const[pokemonList, setPokemonList] = useState({ })
    const[selectPokemon, setSelectPokemon] = useState(null)
    const[page, setPage] = useSatet(0)
    const pokemonPage = 20

    const fetchPokemon = (page) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonPage}&offset=$
        {page * pokemonPage}`)
        .then(res =>{
            Promise.all(res.data.results.map( pokemon =>
                axios.get(pokemon.url)
                    .then(res=>{
                        const (data) = res
                        data.abilities = data.abilities.map(a => a.ability.name).join  
                        (`, `)
                        data.types = data.types.map(t => t.type.name).join(`/`)
                        return data 
                    })
                ))
                .then(pokemonData => setPokemonList(pokemonData))
                .catch(err => console.log(err))
                })   

                .catch(err => console.log(err))
             }

                 userEffct(() =>{
                    fetchPokemon (page)
                 }, [page])

                 if (selectedPokemon){
                    return <PokemonDetails pokemon={selectPokemon} 
                    goBack={() => setSelectPokemon(Null)} />
                 }

                return(
                    <>
                        <Header logo={logo} />   
                        <ContainerHome>
                           {pokemonList.map((pokemon) =>(
                            <Card key=
                            {pokemon.name}
                            pokemon=
                            {pokemon}
                            onDetailsClick=
                            {setSelectedPokemon}/>
                           ))}
                        </ContainerHome>
                        <DivButtonPage>
                            <ButtonPage onClick={() => setPage (oldPage => Math.max(oldPag -1, 0)}> Anterior </ButtonPage>
                            <ButtonPage onClick={() => setPage (oldPage => onldPage.max + 1)}> Próximo </ButtonPage>
                        </DivButtonPage>                              
                    /</>
            )}

                export default PokemonList