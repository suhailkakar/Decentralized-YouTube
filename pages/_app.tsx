import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { LivepeerConfig } from "@livepeer/react";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { ThemeProvider } from "../utils";
import { Toaster } from "react-hot-toast";
import { LivepeerClient } from "../clients";

const HyperspaceTestnet = {
  /** ID in number form */
  id: 3141,
  /** Human-readable name */
  name: "Filecoin - Hyperspace testnet",
  /** Internal network name */
  network: "filecoin",
  /** Currency used by chain */
  nativeCurrency: { name: "testnet filecoin", symbol: "tFIL", decimals: 18 },
  /** Collection of RPC endpoints */
  rpcUrls: {
    public: "https://rpc.ankr.com/filecoin_testnet",
  },
  testnet: true,
};

const { chains, provider } = configureChains(
  //@ts-ignore
  [HyperspaceTestnet],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://rpc.ankr.com/filecoin_testnet`,
      }),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Ourtube",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        theme={darkTheme({
          accentColor: "#eab308",
        })}
        modalSize="compact"
        chains={chains}
      >
        <ThemeProvider>
          <LivepeerConfig client={LivepeerClient}>
            <Component {...pageProps} />
            <Toaster />
          </LivepeerConfig>
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
