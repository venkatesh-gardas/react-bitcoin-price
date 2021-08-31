import { Curencies } from "./App";

const API = {
  getBitcoinData: async (): Promise<Curencies> =>
    await (await fetch("https://www.blockchain.com/ticker")).json(),
};

export default API;