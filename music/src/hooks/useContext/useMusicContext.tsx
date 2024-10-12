import { useContext } from "react";
import { MusicContext } from "../../context/MusicContext";

// Shorten the hook to avoid repetition:
export const useMusicContext = () => {
   return useContext(MusicContext);
}