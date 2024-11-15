import React from 'react'
import { area } from "../data"
import Paper from "../../../components/paper/page"
import Form from "../../../components/form/Form"

export default function Page() {
    let top_area = "All Areas"


    return (
        <div className='py-20'>


            <Paper data={area} h1={top_area} />
            <Form />



        </div>
    )
}
