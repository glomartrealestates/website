import Counters from "./_components/page_component/Counters";
import DetailCard from "./_components/page_component/Details_card_page";
import MyForm from "./_components/page_component/Form";
import Hero from "./_components/page_component/Hero";
import Project from "./_components/page_component/Project";
import SliderP from "./_components/page_component/SliderP";
import Unit from "./_components/page_component/Unit";
import Slideshow from "./_components/special_component/first_Slider";
import TowCards from "./_components/special_component/tow_Cards";

export default function Home() {
  return (
    <>
      <Counters />
      <Project />
      <SliderP />
      <Unit />
      <TowCards />
      <DetailCard />
      <MyForm />
    </>
  );
}
