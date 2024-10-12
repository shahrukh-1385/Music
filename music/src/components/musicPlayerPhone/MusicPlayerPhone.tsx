import { useMusicContext } from '../../hooks/useContext/useMusicContext';
import "./musicPlayerPhone.css";

function MusicPlayerPhone() {
  
  const { musics } = useMusicContext();
  return (
    <>
    {/* await for response */}
      {musics.length === 0
        ?
        <div className="music-player flex justify-center items-center">
          <div className='text-lg font-vazirmatn400'>...در حال بارگذاری</div>
        </div>
        :
        <div className="music-player flex">
          <div>
            <span className="circle">
              <img className="circle-music-img" src={musics[0]?.image} alt={musics[0]?.title} />
              <i className="playIcon fa-solid fa-play absolute"></i>
            </span>
          </div>
          <div className="flex titleBox w-full">
            <span className="mr-20 text-3xl font-vazirmatn300 musicTitle">{musics[0]?.title}</span>
          </div>
        </div>
      }
    </>
  );
}

export default MusicPlayerPhone;
