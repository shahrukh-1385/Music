import { useMusicContext } from "../../hooks/useContext/useMusicContext";

function Header() {
  const { musics } = useMusicContext();

  // map items for show in header
  const headerOffer = musics?.map((item) => {
    return (
      <div className="mt-3 h-20 flex flex-col justify-center items-center" key={item.id}>
        <img src={item.image} alt="" className="rounded-md h-16 " />
        <span className="font-vazirmatn400 text-gray-50 ">{item.title}</span>
      </div>
    )
  });
  // elements:
  return (
    <section>
      <header className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 bg-purple-950 gap-2 h-56 lg:h-28">
        {headerOffer}
      </header>
    </section>
  );
}

export default Header;