import styled from "@emotion/styled"

const Cotizacion = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`
const Texto = styled.p`
        font-size: 18px;
    span{
        font-weight: 700;
    }
`
const Imagen = styled.img`
    display: block;
    width: 150px;
`

const Resultado = ({cotizacion}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = cotizacion
    return (
        <Cotizacion>
            <Imagen 
                src={`https://cryptocompare.com/${IMAGEURL}`} 
                alt='imagen cripto'
            />
            <div>
                <Precio>Valor: <span>{PRICE}</span></Precio>
                <Texto>Valor más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Valor más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última actulización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Cotizacion>
    );
}

export default Resultado;
