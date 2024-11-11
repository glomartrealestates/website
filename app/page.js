"use client"

import Counters from "./_components/page_component/Counters";
import DetailCard from "./_components/page_component/Details_card_page";
import MyForm from "./_components/page_component/Form";
import Hero from "./_components/page_component/Hero/Hero";
import Project from "./_components/page_component/Project";
import SliderP from "./_components/page_component/SliderP";
import Unit from "./_components/page_component/Unit";
import Slideshow from "./_components/special_component/first_Slider";
import TowCards from "./_components/special_component/tow_Cards";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  let router = useRouter()

  useEffect(() => {
    router.push("/home")

  })
  return (
    <div style={{ paddingLeft: "60px",paddingRight: "60px" }}>
      <Counters />
      <Project />
      <SliderP />
      <Unit />
      <TowCards />
      <DetailCard />
      <MyForm />
    </div>
  );
}
