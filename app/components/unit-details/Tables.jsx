import { Item } from '@radix-ui/react-select'
import React from 'react'
import "./style.css"

export default function Tables() {
    let data = [
        {
            head: "Reference No.",
            value: "54140"
        },
        {
            head: "Bedrooms",
            value: 1
        },
        {
            head: "Bathrooms",
            value: 1
        },
        {
            head: "Delivery In",
            value: 2028
        },
        {
            head: "Compound",
            value: "Cleo"
        },
        {
            head: "Sale Type",
            value: "Developer Sale"
        },
        {
            head: "Finishing",
            value: "Not Finished"
        },
    ]

    return (
        <div>
            <table className='sm:w-[280px] lg:w-[400px]'>
                <tr className='flex border-b' style={{borderBottomColor:"black" , borderBottomWidth:"2px"}}>
                    <td className='flex-1 py-1 text-lg font-bold' style={{ color: "rgb(30, 65, 100)" }}
                    >Apartment</td>
                    <td className='flex-1 py-1 '><span className='text-lg font-bold ' style={{ color: "rgb(30, 65, 100)" }}
                    >70</span><span className='font-bold'>m²</span></td>
                </tr>
                {
                    data.map((item, index) => {

                        return (
                            <tr key={index} className='flex items-center gap-10'>
                                <td className='flex-1 py-1'>{item.head}</td>
                                <td className='flex-1 py-1'>{item.value}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}
