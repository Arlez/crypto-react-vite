import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas"

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease-in-out;
    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Formulario = () => {

    const [SelectMonedas] = useSelectMonedas('Elige tu Moneda');

    
    return ( 
        <form>
            <SelectMonedas />
            <InputSubmit type="submit" value='Cotizar' />
        </form>
     );
}
 
export default Formulario;