import React from 'react'
import CardCarousel from "../../../../components/carousel/CardCarousel"
import {properties} from "../../data"
import UnitDetails from '@/app/components/unit-details/UnitDetails'
import UnitSlider from '../../../../components/carousel/UnitsSlider'

export default function Page() {
  return (
    <div className='py-10'>
        <UnitSlider/>
        <UnitDetails/>
        <CardCarousel data={properties} h1 = "Suggested Properties"/>
    </div>
  )
}
