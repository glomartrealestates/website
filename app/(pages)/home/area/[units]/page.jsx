import React from 'react'
import CardCarousel from "../../../../components/carousel/CardCarousel"
import {properties} from "../../data"
import UnitDetails from '@/app/components/unit-details/UnitDetails'
import UnitSlider from '../../../../components/carousel/UnitsSlider'
import UnitsCarousel from '@/app/components/carousel/UnitsCarousel'

export default function Page() {
  return (
    <div className='py-10'>
      <UnitsCarousel/>
        <UnitSlider/>
        <UnitDetails/>
        <CardCarousel data={properties} h1 = "Suggested Properties"/>
    </div>
  )
}
