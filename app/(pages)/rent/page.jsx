"use client"
import {useEffect, useState} from "react"
import { Heart, Home, Share2, Phone } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getAllProperties } from "@/actions/propertiesAction"
import { FaWhatsapp } from "react-icons/fa6"
import { MdOutlineBedroomChild } from "react-icons/md"
import { CiLocationOn } from "react-icons/ci";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { useRouter } from "next/navigation";


export default function Component() {
  let router = useRouter()

    const [units, setUnits] = useState([])
    const fetchData = async()=>{
        const {properties, totalProperties} = await getAllProperties();
        setUnits(properties)
        console.log(properties)
      }
      useEffect(() => {
        fetchData();
      }, []);      
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {units.map((property) => (
          <div key={property.id} onClick={()=>{

            router.push(`/home/area/${property.id}`)
          }} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img src={property.image || "/images/contact-background.webp"} alt={property.name} className="w-full h-48 object-cover" />
              <Badge className="absolute top-2 left-2 bg-red-500 text-white">For sell</Badge>
              <div className="absolute top-2 right-2 flex space-x-2">
                <Button size="icon" variant="secondary" className="bg-white bg-opacity-50 hover:bg-opacity-100">
                  <Home className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="secondary" className="bg-white bg-opacity-50 hover:bg-opacity-100">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="secondary" className="bg-white bg-opacity-50 hover:bg-opacity-100">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute bottom-2 right-2">
                <Badge variant="secondary" className="bg-white text-black">
                  {property.propertyOfferedBy}
                </Badge>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{property.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{property.location}</p>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                <HiMiniCurrencyDollar className="w-5 h-5 mr-1"/>
                  <span className="text-sm">{property.currency}</span>
                </div>
                <div className="flex items-center">
                <MdOutlineBedroomChild className="w-5 h-5 mr-1"/>

                  <span className="text-sm">{property.rooms} Rooms</span>
                </div>
                <div className="flex items-center">
                <CiLocationOn className="w-5 h-5 mr-1" />

                  <span className="text-sm">{property.area}</span>
                </div>
              </div>
              <div className="mb-2">
                <p className="text-sm text-gray-600">
                  {/* {property.monthlyPrice.toLocaleString()} Monthly / {property.leaseDuration} Years */}
                </p>
                <p className="text-lg font-bold">{property.totalPrice.toLocaleString()} EGP</p>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" className="flex-1 mr-2">
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
                <Button variant="outline" className="flex-1 bg-green-50 text-green-600 border-green-200 hover:bg-green-100 hover:text-green-700">
                <FaWhatsapp className="w-5 h-5 mr-1" />

                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}