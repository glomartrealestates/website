import React from 'react'

import Form from "../../components/form/Form"
import { ps, cards, boxes } from "./data"

function Page() {

  return (
    <div className="about-us py-10 ">
      <div className="container mx-auto p-10" >
        <h1 className="font-bold text-2xl"
          style={{ color: "rgb(30, 65, 100)" }}>About US</h1>
        {
          ps.map((item, index) => {
            return (
              <p key={index} className='text-gray-700 text-md my-3'>{item.p}</p>
            )
          })
        }
      </div>
      <div className='bg-lightBlue px-10 py-10 min-h-[55vh] flex flex-col justify-between' >
        <h1 className='text-center font-bold text-3xl my-4 ' style={{ color: "rgb(30, 65, 100)" }}>Founders
        </h1>
        <div className='flex gap-3 justify-center flex-wrap  '>

          {
            boxes.map((item, index) => {
              return (
                <div className='flex flex-col gap-1 w-[260px] px-4 py-5 justify-center items-center bg-white shadow-lg rounded-lg' key={index}>
                  <h1 className='text-center font-bold'>{item.title}</h1>
                  <p className='text-center text-md text-gray-600'>{item.p}</p>
                </div>
              )
            })
          }

        </div>
      </div>
      <div>
        <h1 className="font-bold text-3xl my-10 text-center" style={{ color: "rgb(30, 65, 100)" }}>our products</h1>
        <p className='text-center text-md'>On a mission to revolutionize the real estate industry, we promise to help each and every one of <br />our customers to make a well-informed decision and buy their dream house.</p>
      </div>

      <div>
        <h1 className='font-bold text-3xl my-10  text-center' style={{ color: "rgb(30, 65, 100)" }}>Our News

        </h1>
        <div className='flex justify-center gap-5 flex-wrap'>
          {
            cards.map((item, index) => {
              return (
                <div key={index} className='flex flex-col gap-2 w-[290px] rounded'>
                  <img src={item.img} alt="..." className='rounded-lg' />
                  <h1 className='font-bold'> {item.h1}</h1>
                  <p>{item.p.slice(0, 80)}...</p>
                  <a href="#" style={{ color: "rgb(30, 65, 100)" }}>{item.link}</a>
                </div>
              )
            })
          }
        </div>
      </div>
     

    </div>
  )
}

export default Page