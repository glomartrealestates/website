import BackgroundImage from './BackgroundImage';
import Heading from './Heading';
import SearchBar from './SearchBar';

function Hero() {
  return (
    <div itemscope="" itemtype="https://schema.org/CreativeWork" className="relative">
      <BackgroundImage />
      <div className="background-overlay absolute inset-0 bg-black opacity-50"></div>
      
      <div className="container relative flex flex-col  justify-center mx-auto px-16 py-32  max-w-screen-xl">
        <Heading />
        <SearchBar />
      </div>
    </div>
  );
}

export default Hero;
