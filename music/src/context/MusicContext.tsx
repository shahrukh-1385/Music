import { createContext, useState, useEffect } from "react";
import { getMusic } from "../server/Server";

// server musics types:
interface MusicsData {
   id: string;
   song: string;
   title: string;
   image: string;
   description: string;
}
// context provider types:
interface MusicContextProvider {
   musics: MusicsData[];
}

export const MusicContext = createContext({} as MusicContextProvider);

export function MusicProvider({ children }: any) {

   const [musics, setMusics] = useState<MusicsData[]>([]);

   // Getting music from server:
   useEffect(() => {
      getMusic()
         .then((result) => {
            setMusics(result);
            console.log(`result OK`)
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);
   
   // elements App
   return (
      <MusicContext.Provider value={{ musics }}>
         {children}
      </MusicContext.Provider>
   );
}


