import { useEffect, useState } from 'react';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { getMusic } from '../../server/Server';


// server musics types:
interface MusicsData {
   id: string;
   song: string;
   title: string;
   image: string;
   description: string;
}

function Navbar() {
   const navigate = useNavigate();
   const [serchValue, setSerchValue] = useState('');
   const [musics, setMusics] = useState<MusicsData[]>([]);

   // Getting music from server:
   useEffect(() => {
      getMusic()
         .then((result) => {
            setMusics(result);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   // search music:
   const Search = () => {
      // find music object
      const MusicFounded = musics.filter((item: MusicsData) =>
         item.title.toLowerCase().includes(serchValue.trim().toLowerCase())
      );
      // somewhere between the pages:
      if (MusicFounded.length > 0) {
         navigate(`/MusicPage/${MusicFounded[0].id}`);
      } else {
         console.log(`موزیک پیدا نشد`);
      }
   }
   // elements:
   return (
      <div className="bg-red-300 flex h-20 items-center justify-around">
         <div className="logo hidden md:block">
            <span className="">LOGO</span>
         </div>
         <div className="inputBar bg-white w-60 h-12 flex items-center justify-center rounded-2xl">
            <input onChange={(e: any) => { setSerchValue(e.target.value) }}
               type="text" placeholder="اهنگت رو پیدا کن"
               className="search-music h-full rounded-2xl placeholder:font-vazirmatn400 placeholder:mr-3 focus:outline-none"
            />
            <span className="font-vazirmatn400 text-lg bg-cyan-400 px-2 py-1 rounded-xl text-white" onClick={Search}>سرچ</span>
         </div>
      </div>
   );
};

export default Navbar;