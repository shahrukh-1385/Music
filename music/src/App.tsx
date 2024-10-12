import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { MusicProvider } from './context/MusicContext';
import Navbar from './components/navbar/Navbar';
import Music from './pages/music/Music';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MusicProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/MusicPage/:id' element={<Music />} />
        </Routes>
      </MusicProvider>
    </BrowserRouter>
  );
}

export default App;
