import Calculadora from '../components/calc'
import SpotifyEmbed from '../components/spotify';


export default function Home() {
  return (
    <div className="bg-[#F4F4F4] min-h-screen flex flex-col justify-center">
    <Calculadora />
    <SpotifyEmbed />
  </div>
  
  );
}
