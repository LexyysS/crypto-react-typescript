
import { create } from "zustand";

import { CryptoPrice, Cryptocurrency, Pair } from "./types";
import { getCryptos, fetchCurrentCryptoPrice } from "./services/CryptoService";
type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    result: CryptoPrice
    loading: boolean
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}


export const useCryptoStore = create<CryptoStore>((set) => ({
    cryptocurrencies: [],
    result:{} as CryptoPrice,
    loading: false,
    fetchCryptos: async () => {
       const cryptocurrencies = await getCryptos()
       set(() => ({
        cryptocurrencies
       }))
    },


    fetchData : async (pair) => {
        set(() => ({
            loading: true
        }))
       const result = await fetchCurrentCryptoPrice(pair)
       set(() => ({
        result,
        loading: false
       }))
    }
}))