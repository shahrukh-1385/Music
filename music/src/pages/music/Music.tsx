import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMusicByID } from "../../server/Server";
interface Music {
   id: string;
   song: string;
   title: string;
   image: string;
   description: string;
};
function Music() {
   const [music, setMusic] = useState<Music[]>([]);

   // Searched music id or selected music in params
   const { id } = useParams();

   // get music id from server:
   useEffect(() => {
      console.log(id)
      if (id) {
        getMusicByID(id).then((result) => {
         setMusic(result)
        }).catch((err) => {
          console.log(err)
        });
      }
    }, [id]);
   // elements
   return(
      <div>Music Page {id} </div>
   )
}

export default Music;