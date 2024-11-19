"use client"
import React, { useState } from 'react'
import Table from "./Tables"
import { Grid } from '@mui/material'
import Details from './Details'
import Contact from "./Contact"
export default function UnitDetails() {
    let [hidden, setHidden] = useState(true)
    return (
        <div>
            <Grid container className='flex justify-center py-10'>
                <Grid item xs={12} lg={10.8}>

                    <Contact/>

                    <h1 className="font-bold text-2xl my-4"
                        style={{ color: "rgb(30, 65, 100)" }}>Details</h1>
                    <Details />
                    <Table />

                    <h1 className="font-bold text-2xl my-4"
                        style={{ color: "rgb(30, 65, 100)" }}>Amenities</h1>
                    <p className='flex items-center gap-3'><span><img src="https://prod-images.cooingestate.com/processed/amenity/image/1/medium.webp" className='w-[40px]' alt="..." /></span> <span>Garden
                    </span></p>
                    <h1 className="font-bold text-2xl my-4"
                        style={{ color: "rgb(30, 65, 100)" }}>Payment Plans
                    </h1>
                    <p><span className="font-bold text-xl my-4"
                        style={{ color: "rgb(30, 65, 100)" }}> 88,380 </span> Monthly |
                        <span> 471,350 </span> - Down Payment |
                        <span className="font-bold text-xl my-4"
                            style={{ color: "rgb(30, 65, 100)" }}> 8 </span> Years</p>
                    <h1 className="font-bold text-2xl my-5"
                        style={{ color: "rgb(30, 65, 100)" }}>About Apartment
                    </h1>
                    <p>A <span>1</span> bedroom Apartment in Cleo by Palm Hills Developments. The Apartment size is <span>70</span> m2 with <span>1</span> bathrooms <br />

                        with a garden of <span>29</span> m2</p>

                    <p className='mt-5'>This property will be ready for delivery not-finished by <span>2028-06-29</span>.

                    </p>

                    <h1 className='font-bold mb-1 mt-5 text-lg'>Unique Selling Points at Cleo - Palm Hills - New Cairo <br />

                        A Lakeside Community</h1>


                    <div style={{ height: hidden ? "0px" : "auto", overflow: "hidden" }}>
                        <p>The water feature at Cleo Water Residences is a perfect blend of form and function. The <span>5,000</span> m2 lagoon provides <br /> breathtaking views and helps to enhance the climate around the property.

                        </p>
                        <p>The lagoon offers unique social spaces that are full of character and appeal. It also serves as a stunning separator between one neighborhood and the next.

                        </p>
                        <p className='font-bold mb-1 mt-4 text-lg'> The Greener Side

                        </p>
                        <p>At Cleo Water Residences, you'll feel like you're living in a park. With <span>82</span>% of the space dedicated to green open <br /> spaces, there's plenty of room to explore and enjoy the fresh air. The <span>14</span> fully finished buildings are connected by<br /> footpaths and walkways, so you can always find a new route to take. Whether you're taking a stroll or getting some <br /> exercise, Cleo Water Residences is the perfect place to enjoy the outdoors.

                        </p>
                    </div>
                    <button className='border px-5 py-2 rounded mt-5' style={{ color: "rgb(30, 65, 100)", borderColor: "gray" }} onClick={() => {
                        setHidden(!hidden)
                    }}>{hidden ? "See More" : "See Less"}</button>
                </Grid>
            </Grid>
        </div>
    )
}
