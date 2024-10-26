import Counters from "./_components/page_component/Counters";
import Hero from "./_components/page_component/Hero";
import Project from "./_components/page_component/Project";
import SliderP from "./_components/page_component/SliderP";
import Unit from "./_components/page_component/Unit";


export default function Home() {
  return (
    <>
        <Counters />
        <Project />
        <SliderP/>
        <Unit/>
    </>
  );
}
