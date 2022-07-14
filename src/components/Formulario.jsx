import { useEffect, useState } from "react"
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas"
import Error from "./Error";
import { monedas } from '../data/monedas'

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
    margin-top: 30px;
    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Formulario = ({setMonedas}) => {

    const [cryptos, setCryptos] = useState([])
    const [error, setError] = useState(false)

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomoneda', cryptos)
    
    useEffect(()=>{
        const consultarApi = async ()=>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            const arrayCryptos = resultado.Data.map(crypto => {
                const objeto = {
                    id: crypto.CoinInfo.Name,
                    nombre:crypto.CoinInfo.FullName
                }
                return objeto
            })
            setCryptos(arrayCryptos)
        }
        consultarApi()
    }, [])
    
    const handleSubmit = e => {
        e.preventDefault()

        if([moneda,criptomoneda].includes('')){
            setError(true)
            return
        }
        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }

    return ( 
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <form
                onSubmit={handleSubmit}
            >
                <SelectMonedas />
                <SelectCriptomoneda/>
                <InputSubmit type="submit" value='Cotizar' />
            </form>
        </>
     );
}
 
export default Formulario;