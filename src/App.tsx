import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm";
import { useCryptoStore } from "./store";
import CriptoPriceDisplay from "./components/CriptoPriceDisplay";
import Spinner from "./components/Spinner";
function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos);

  const result = useCryptoStore((state) => state.result);
  const loading = useCryptoStore((state) => state.loading);
  const hasResult = Object.keys(result).length > 0;

  useEffect(() => {
    fetchCryptos();
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="content">
          <CriptoSearchForm />
          {loading ? <Spinner /> : hasResult && <CriptoPriceDisplay />}
        </div>
      </div>
    </>
  );
}

export default App;
