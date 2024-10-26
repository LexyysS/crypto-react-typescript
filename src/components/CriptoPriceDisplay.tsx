import { useCryptoStore } from "../store"
const CriptoPriceDisplay = () => {

    const result = useCryptoStore((state) => state.result)
  return (
    <div className="result-wrapper">
        <h2>Resultados</h2>
        <div className="result">
            <img src={`https://www.cryptocompare.com/${result.IMAGEURL}`} alt="Imagen criptomoneda"/>
            <div>
                <p>
                    El precio es de : <span>{result.PRICE}</span>
                </p>
                <p>
                    Precio mas alto del dia: <span>{result.HIGHDAY}</span>
                </p>
                <p>
                    Precio mas bajo del dia : <span>{result.LOWDAY}</span>
                </p>
                <p>
                    Variacion últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span>
                </p>
                <p>
                    Última actualización: <span>{result.LASTUPDATE}</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default CriptoPriceDisplay