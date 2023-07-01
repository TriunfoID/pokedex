import {Button, ConatainerButton, ContainerLogo} from "./styles"

function Header(logo, goBack){
    return(
        <>
    {logo ? (
    <ConatainerLogo>
        <ImagemLogo src={log}/>
    </ConatainerLogo>) : (
        <ConatainerButton>
            <Button onClick={goBack}>Voltar para a lista</Button>
        </ConatainerButton>
    )}
        </>
    )
 }

 export default Header